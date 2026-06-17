import { useEffect, useRef, useState } from 'react';
import { Mic, MicOff, Send, Bot, User, Loader2, LogIn, LogOut, ShieldCheck, VolumeX, ThumbsUp, ThumbsDown, Edit2, Database, X, Search, ArrowUpDown, Filter, BarChart2, CheckSquare, Square, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';
import Markdown from 'react-markdown';
import { getChatResponse, type ChatMessage } from './services/geminiService';
import { speak, startListening, stopSpeaking, setSpeechLanguage } from './services/speechService';
import { cn } from './lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from './AuthProvider';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp, doc, setDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType, auth } from './firebase';
import { updateProfile } from 'firebase/auth';
import { collegesDatabase } from './data/colleges';

export default function App() {
  const { user, profile, preferences, updatePreferences, signIn, logOut, updateRole } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showDatabase, setShowDatabase] = useState(false);

  // Database View States
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");
  const [filterState, setFilterState] = useState("");
  const [compareList, setCompareList] = useState<string[]>([]);
  const [isComparing, setIsComparing] = useState(false);

  // Advanced Filters
  const [showFilters, setShowFilters] = useState(false);
  const [filterTier, setFilterTier] = useState("");
  const [filterExam, setFilterExam] = useState("");
  const [filterFee, setFilterFee] = useState("");
  const [filterLevel, setFilterLevel] = useState("");

  useEffect(() => {
    if (preferences?.language) {
      setSpeechLanguage(preferences.language);
    }
  }, [preferences?.language]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Default introductory message if no history exists
  useEffect(() => {
    if (messages.length === 0 && !isLoading) {
       setMessages([{
         id: 'greeting',
         role: 'assistant',
         content: 'Hello! I am the Global College Intelligence Assistant. How can I help you today with your college enquiries?'
       }]);
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (!user) {
      setMessages([]); // Clear history on logout
      return;
    }

    const historyRef = collection(db, 'users', user.uid, 'history');
    const q = query(historyRef, orderBy('timestamp', 'asc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedMessages = snapshot.docs.map(doc => ({
        id: doc.id,
        role: doc.data().role as 'user' | 'assistant',
        content: doc.data().content,
        feedback: doc.data().feedback
      }));
      if (fetchedMessages.length > 0) {
        setMessages(fetchedMessages);
      }
    }, (error) => {
       handleFirestoreError(error, OperationType.LIST, `users/${user.uid}/history`);
    });

    return () => unsubscribe();
  }, [user]);


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;
    
    setError(null);
    setInput('');
    setIsLoading(true);

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text.trim()
    };
    
    // Optimistic update
    setMessages(prev => [...prev, userMessage]);

    // Save user message to Firestore if logged in
    if (user) {
      try {
        await addDoc(collection(db, 'users', user.uid, 'history'), {
          role: 'user',
          content: text.trim(),
          timestamp: serverTimestamp()
        });
      } catch (err) {
        handleFirestoreError(err, OperationType.CREATE, `users/${user.uid}/history`);
      }
    }

    try {
      const responseText = await getChatResponse(
        messages, 
        text, 
        profile?.role || 'guest'
      );
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      speak(responseText);

      // Save assistant message to Firestore if logged in
      if (user) {
        await addDoc(collection(db, 'users', user.uid, 'history'), {
          role: 'assistant',
          content: responseText,
          timestamp: serverTimestamp()
        });
      }

    } catch (err) {
      setError("Failed to get a response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFeedback = async (messageId: string, feedback: 'upvote' | 'downvote') => {
    setMessages(prev => prev.map(m => {
      if (m.id === messageId) {
        const newFeedback = m.feedback === feedback ? 'none' : feedback;
        return { ...m, feedback: newFeedback };
      }
      return m;
    }));

    if (user && messageId !== 'greeting') {
       try {
         const messageToUpdate = messages.find(m => m.id === messageId);
         if (!messageToUpdate) return;
         const newFeedback = messageToUpdate.feedback === feedback ? 'none' : feedback;
         
         await setDoc(doc(db, 'users', user.uid, 'history', messageId), {
           feedback: newFeedback
         }, { merge: true }).catch(err => handleFirestoreError(err, OperationType.UPDATE, `users/${user.uid}/history/${messageId}`));
       } catch (err) {
         console.error('Failed to update feedback');
       }
    }
  };

  const toggleCompare = (collegeId: string) => {
    setCompareList(prev => {
      if (prev.includes(collegeId)) return prev.filter(id => id !== collegeId);
      if (prev.length >= 3) {
        alert("You can only compare up to 3 colleges at a time.");
        return prev;
      }
      return [...prev, collegeId];
    });
  };

  const filteredColleges = collegesDatabase
    .filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesState = filterState ? c.state === filterState : true;
      const matchesTier = filterTier ? c.tier === filterTier : true;
      const matchesExam = filterExam ? c.eligibilityFactors?.acceptedExams?.some(e => e.toLowerCase() === filterExam.toLowerCase()) : true;
      const matchesLevel = filterLevel ? c.coursesInfo?.some(course => course.level === filterLevel) : true;
      
      let matchesFee = true;
      if (filterFee === '0-100000') matchesFee = c.feesNum <= 100000;
      else if (filterFee === '100000-300000') matchesFee = c.feesNum > 100000 && c.feesNum <= 300000;
      else if (filterFee === '300000+') matchesFee = c.feesNum > 300000;

      return matchesSearch && matchesState && matchesTier && matchesExam && matchesLevel && matchesFee;
    })
    .sort((a, b) => {
      if (sortOption === "name-asc") return a.name.localeCompare(b.name);
      if (sortOption === "name-desc") return b.name.localeCompare(a.name);
      if (sortOption === "fees-asc") return a.feesNum - b.feesNum;
      if (sortOption === "fees-desc") return b.feesNum - a.feesNum;
      return 0;
    });

  const uniqueStates = Array.from(new Set(collegesDatabase.map(c => c.state))).sort();
  const uniqueExams = Array.from(new Set(collegesDatabase.flatMap(c => c.eligibilityFactors?.acceptedExams || []))).sort();

  const toggleRecording = () => {
    if (isRecording) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsRecording(false);
    } else {
      setError(null);
      window.speechSynthesis.cancel();
      setIsRecording(true);
      recognitionRef.current = startListening(
        preferences?.language || 'en-US',
        (transcript) => {
          handleSend(transcript);
        },
        (err) => {
          if (err !== 'no-speech') {
            setError(`Microphone error: ${err}`);
          }
          setIsRecording(false);
        },
        () => {
          setIsRecording(false);
        }
      );
    }
  };

  return (
    <div className="flex h-screen bg-[#0A0A0B] text-[#E0E0E0] font-sans overflow-hidden">
      <main className="flex-1 flex flex-col relative w-full h-full min-w-0">
        
        {/* Header */}
        <header className="h-20 border-b border-white/5 px-6 md:px-10 items-center justify-between shrink-0 flex">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-white rounded hidden sm:flex items-center justify-center">
              <div className="w-4 h-4 bg-black rotate-45"></div>
            </div>
            <h1 className="text-lg font-serif italic text-white tracking-tight">CollGen.AI</h1>
            <span className="hidden sm:flex px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-widest items-center gap-1">
              <ShieldCheck size={10} /> Active
            </span>
            <button 
               onClick={() => setShowDatabase(true)}
               className="hidden sm:flex items-center gap-2 px-3 py-1 ml-2 rounded-full bg-white/5 hover:bg-emerald-500/10 text-emerald-400/80 hover:text-emerald-400 text-[10px] uppercase font-bold tracking-wider transition-colors border border-emerald-500/20"
            >
               <Database size={12} /> Database
            </button>
            <button 
               onClick={stopSpeaking}
               className="hidden sm:flex items-center gap-2 px-3 py-1 ml-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white text-[10px] uppercase font-bold tracking-wider transition-colors"
            >
               <VolumeX size={12} /> Stop Speech
            </button>
          </div>
          <div className="flex items-center gap-6">
            {user ? (
              <div className="flex items-center gap-4">
                <button onClick={logOut} className="text-white/40 hover:text-white transition-colors" title="Logout">
                  <LogOut size={16} />
                </button>
                <div 
                  className="relative group cursor-pointer"
                  onClick={async () => {
                    const url = prompt("Enter new profile picture URL:", user.photoURL || "");
                    if (url !== null) {
                      try {
                        await updateProfile(user, { photoURL: url });
                        window.location.reload();
                      } catch (e) {
                        alert("Failed to update profile picture.");
                      }
                    }
                  }}
                  title="Edit Profile Picture"
                >
                  <div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden flex items-center justify-center bg-zinc-800">
                    {user.photoURL ? <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" /> : <User size={20} />}
                  </div>
                  <div className="absolute inset-0 bg-black/40 hidden group-hover:flex items-center justify-center rounded-full transition-all">
                    <Edit2 size={14} className="text-white" />
                  </div>
                </div>
              </div>
            ) : (
              <button onClick={signIn} className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-black rounded-lg text-xs font-bold transition-colors">
                <LogIn size={14} />
                Sign In
              </button>
            )}
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-10 justify-center flex">
          <div className="w-full max-w-3xl flex flex-col gap-6">
            <AnimatePresence initial={false}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex items-start gap-4 max-w-[85%]",
                    message.role === 'user' ? "ml-auto flex-row-reverse" : ""
                  )}
                >
                  <div className={cn(
                    "flex items-center justify-center h-10 w-10 shrink-0 rounded-full border",
                    message.role === 'user' 
                      ? "bg-[#161618] text-white border-white/10" 
                      : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                  )}>
                    {message.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                  </div>
                  
                  <div className="flex flex-col gap-2 max-w-full">
                    <div className={cn(
                      "px-5 py-4 rounded-2xl text-[13px] leading-relaxed shadow-sm block",
                      message.role === 'user' 
                        ? "bg-white/5 text-white rounded-tr-none border border-white/10" 
                        : "bg-[#121214] text-white/80 rounded-tl-none border border-white/5"
                    )}>
                      {message.role === 'user' ? (
                        <p className="whitespace-pre-wrap">{message.content}</p>
                      ) : (
                        <div className="markdown-body prose prose-sm prose-invert prose-emerald max-w-none text-white/80 overflow-x-auto">
                          <Markdown>{message.content}</Markdown>
                        </div>
                      )}
                    </div>
                    {message.role === 'assistant' && (
                      <div className="flex items-center gap-2 px-2">
                        <button 
                          onClick={() => handleFeedback(message.id, 'upvote')}
                          className={cn(
                            "p-1.5 rounded-md transition-colors",
                            message.feedback === 'upvote' ? "bg-emerald-500/20 text-emerald-400" : "text-white/30 hover:text-white/60 hover:bg-white/5"
                          )}
                        >
                          <ThumbsUp size={12} />
                        </button>
                        <button 
                          onClick={() => handleFeedback(message.id, 'downvote')}
                          className={cn(
                            "p-1.5 rounded-md transition-colors",
                            message.feedback === 'downvote' ? "bg-red-500/20 text-red-400" : "text-white/30 hover:text-white/60 hover:bg-white/5"
                          )}
                        >
                          <ThumbsDown size={12} />
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-4 max-w-[85%]"
                >
                  <div className="flex items-center justify-center h-10 w-10 shrink-0 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Bot size={20} />
                  </div>
                  <div className="px-5 py-4 rounded-2xl bg-[#161618] border border-white/5 rounded-tl-none flex items-center gap-3">
                    <Loader2 className="animate-spin text-emerald-500" size={16} />
                    <span className="text-white/50 text-[10px] uppercase tracking-widest font-bold">Computing Insight...</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} className="h-px" />
          </div>
        </div>

        {/* Input Area */}
        <footer className="bg-[#0A0A0B] border-t border-white/5 p-6 shrink-0 z-10 w-full relative">
          <div className="max-w-3xl mx-auto">
            {error && (
              <div className="mb-4 text-red-400 text-xs border border-red-500/20 px-4 py-3 bg-red-500/10 rounded-xl">
                {error}
              </div>
            )}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex items-end gap-3 relative"
            >
              <button
                type="button"
                onClick={toggleRecording}
                className={cn(
                  "p-3 rounded-full shrink-0 transition-colors flex items-center justify-center border",
                  isRecording 
                    ? "bg-red-500/10 text-red-500 animate-pulse border-red-500/20" 
                    : "bg-[#161618] text-white/50 hover:text-white border-white/10 hover:border-white/20 shadow-lg"
                )}
                title={isRecording ? "Stop recording" : "Start voice enquiry"}
              >
                {isRecording ? <MicOff size={20} /> : <Mic size={20} />}
              </button>
              
              <div className="flex-1 bg-[#121214] border border-white/5 hover:border-white/20 focus-within:border-emerald-500/50 rounded-2xl flex items-center px-4 py-2.5 relative transition-colors shadow-xl">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={user ? `Ask the College Intelligence System (as ${profile?.role || 'Guest'})...` : "Sign in to save history, or ask as Guest..."}
                  className="flex-1 bg-transparent py-1 outline-none text-white placeholder-white/30 text-sm min-w-0"
                  disabled={isLoading || isRecording}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading || isRecording}
                  className="p-1.5 ml-2 bg-white text-black disabled:bg-white/10 disabled:text-white/30 hover:bg-zinc-200 rounded-full transition-colors flex shrink-0 items-center justify-center"
                >
                  <Send size={16} className="m-0.5" />
                </button>
              </div>
            </form>
            <div className="flex justify-center mt-6">
               <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">
                 Global College Matrix
               </p>
            </div>
          </div>
        </footer>
      </main>

      {/* Database Modal */}
      <AnimatePresence>
        {showDatabase && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 lg:p-8"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#121214] border border-white/10 w-full max-w-5xl max-h-full overflow-hidden rounded-2xl flex flex-col shadow-2xl"
            >
              <div className="flex flex-col gap-4 px-6 py-5 border-b border-white/5 bg-[#0A0A0B]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Database size={20} className="text-emerald-400" />
                    <h2 className="text-xl font-serif text-white">{isComparing ? 'Comparing Colleges' : 'College Database Registry'}</h2>
                    {!isComparing && (
                      <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full text-xs ml-2">
                         {collegesDatabase.length} Total
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {isComparing && (
                       <button onClick={() => setIsComparing(false)} className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold transition-colors">
                          Back to List
                       </button>
                    )}
                    <button onClick={() => { setShowDatabase(false); setIsComparing(false); }} className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-colors">
                      <X size={20} />
                    </button>
                  </div>
                </div>
                
                {!isComparing && (
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                        <input 
                          type="text" 
                          placeholder="Search colleges, cities..." 
                          value={searchQuery}
                          onChange={e => setSearchQuery(e.target.value)}
                          className="w-full bg-[#161618] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50"
                        />
                      </div>
                      <div className="flex gap-3">
                        <button 
                          onClick={() => setShowFilters(!showFilters)} 
                          className={cn("bg-[#161618] border rounded-lg px-3 py-2 text-sm text-white hover:bg-white/5 flex items-center gap-2 transition-colors focus:outline-none", showFilters ? "border-emerald-500/50 text-emerald-400" : "border-white/10")}
                        >
                          <SlidersHorizontal size={16} /> Filters
                        </button>
                        <select 
                          value={sortOption} 
                          onChange={e => setSortOption(e.target.value)}
                          className="bg-[#161618] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500/50 appearance-none min-w-[120px]"
                        >
                          <option value="name-asc">A to Z</option>
                          <option value="name-desc">Z to A</option>
                          <option value="fees-asc">Fees: Low to High</option>
                          <option value="fees-desc">Fees: High to Low</option>
                        </select>
                      </div>
                    </div>

                    <AnimatePresence>
                      {showFilters && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }} 
                          animate={{ height: 'auto', opacity: 1 }} 
                          exit={{ height: 0, opacity: 0 }} 
                          className="flex flex-wrap gap-3 overflow-hidden"
                        >
                          <select value={filterState} onChange={e => setFilterState(e.target.value)} className="bg-[#161618] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500/50 appearance-none min-w-[120px]">
                            <option value="">All States</option>
                            {uniqueStates.map(state => <option key={state} value={state}>{state}</option>)}
                          </select>
                          <select value={filterTier} onChange={e => setFilterTier(e.target.value)} className="bg-[#161618] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500/50 appearance-none min-w-[120px]">
                            <option value="">All Tiers</option>
                            <option value="Tier 1">Tier 1</option>
                            <option value="Tier 2">Tier 2</option>
                            <option value="Tier 3">Tier 3</option>
                          </select>
                          <select value={filterFee} onChange={e => setFilterFee(e.target.value)} className="bg-[#161618] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500/50 appearance-none min-w-[120px]">
                            <option value="">All Fees</option>
                            <option value="0-100000">Below 1 Lakh/yr</option>
                            <option value="100000-300000">1 - 3 Lakhs/yr</option>
                            <option value="300000+">Above 3 Lakhs/yr</option>
                          </select>
                          <select value={filterExam} onChange={e => setFilterExam(e.target.value)} className="bg-[#161618] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500/50 appearance-none min-w-[120px]">
                            <option value="">All Exams</option>
                            {uniqueExams.map(ex => <option key={ex} value={ex}>{ex}</option>)}
                          </select>
                          <select value={filterLevel} onChange={e => setFilterLevel(e.target.value)} className="bg-[#161618] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500/50 appearance-none min-w-[120px]">
                            <option value="">All Course Levels</option>
                            <option value="UG">Undergraduate (UG)</option>
                            <option value="PG">Postgraduate (PG)</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Ph.D">Doctorate (Ph.D)</option>
                          </select>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
                {!isComparing && compareList.length > 0 && (
                  <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl mt-2">
                    <div className="flex items-center gap-2 text-sm text-emerald-400">
                      <BarChart2 size={16} />
                      <span>{compareList.length} selected for comparison</span>
                    </div>
                    <button 
                      className="px-4 py-1.5 bg-emerald-500 text-black text-xs font-bold rounded-lg hover:bg-emerald-400 transition-colors"
                      onClick={() => setIsComparing(true)}
                    >
                      Compare Now
                    </button>
                  </div>
                )}
              </div>
              {isComparing ? (
                <div className="flex-1 overflow-x-auto p-6 md:p-8 bg-[#0A0A0B]">
                   <div className="flex gap-6 min-w-max">
                      {compareList.map(id => {
                        const college = collegesDatabase.find(c => c.id === id);
                        if (!college) return null;
                        return (
                          <div key={id} className="bg-[#161618] border border-white/10 p-6 rounded-2xl w-[320px] flex flex-col gap-5 shrink-0 relative">
                            <button 
                               onClick={() => setCompareList(prev => prev.filter(c => c !== id))}
                               className="absolute top-4 right-4 text-white/30 hover:text-white/80 p-1 bg-black/50 rounded-md"
                            >
                               <X size={14} />
                            </button>
                            <div className="pr-6">
                              <div className="flex items-center gap-1.5 mb-2">
                                 <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px] uppercase tracking-widest">{college.tier}</span>
                                 <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] text-white/60 uppercase tracking-widest">{college.state}</span>
                              </div>
                              <h3 className="font-serif text-xl text-white mt-1 mb-1">{college.name}</h3>
                              <p className="text-sm text-white/40">{college.location}</p>
                            </div>
                            
                            <div className="space-y-4 text-sm mt-2">
                              <div>
                                <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold block mb-1">Fees</span>
                                <span className="text-white/90 font-mono bg-white/5 px-2 py-1 rounded">{college.fees}</span>
                              </div>
                              <div>
                                <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold block mb-1">Placements</span>
                                <p className="text-emerald-400/90 leading-relaxed text-xs">{college.placements}</p>
                              </div>
                              <div>
                                <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold block mb-2">Exams & Eligibility</span>
                                <div className="flex flex-wrap gap-1 mb-2">
                                  {college.eligibilityFactors?.acceptedExams?.map((e,i) => <span key={i} className="text-[9px] bg-yellow-400/10 text-yellow-500 border border-yellow-400/20 px-1.5 py-0.5 rounded uppercase">{e}</span>)}
                                </div>
                                <ul className="text-white/60 text-[10px] space-y-0.5">
                                   <li>• {college.eligibilityFactors?.requiredEducation} ({college.eligibilityFactors?.minAge}+ Yrs)</li>
                                   <li>• Domicile: {college.eligibilityFactors?.stateDomicile}</li>
                                </ul>
                              </div>
                              <div>
                                <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold block mb-2 mt-2">Core Courses</span>
                                <div className="flex flex-wrap gap-1 mb-2">
                                  {college.coursesInfo?.slice(0, 3).map((e,i) => <span key={i} className="text-[9px] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-white/80">{e.name}</span>)}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      {compareList.length < 3 && (
                        <div 
                          className="border-2 border-dashed border-white/10 rounded-2xl w-[320px] flex flex-col items-center justify-center shrink-0 text-white/30 hover:text-white/50 hover:border-white/20 transition-colors cursor-pointer"
                          onClick={() => setIsComparing(false)}
                        >
                           <Database size={32} className="mb-3 opacity-50" />
                           <p className="text-sm font-medium">Add another college</p>
                           <p className="text-[10px] text-center px-6 mt-2">You can compare up to 3 colleges side-by-side.</p>
                        </div>
                      )}
                   </div>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto p-6 md:p-8 grid grid-cols-1 xl:grid-cols-2 gap-6 bg-[#0A0A0B]">
                  {filteredColleges.length === 0 ? (
                    <div className="col-span-1 xl:col-span-2 py-20 flex flex-col items-center justify-center text-white/50">
                       <Database size={48} className="mb-4 opacity-20" />
                       <p>No colleges found matching your criteria.</p>
                    </div>
                  ) : filteredColleges.map(college => (
                  <div key={college.id} className="bg-[#161618] border border-white/5 p-5 rounded-2xl flex flex-col gap-4 shadow-xl hover:border-emerald-500/30 transition-all group">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif text-lg text-white mb-1 group-hover:text-emerald-400 transition-colors">{college.name}</h3>
                        <div className="flex items-center gap-1.5 ml-2">
                           <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-[9px] uppercase tracking-widest whitespace-nowrap">{college.tier}</span>
                           <span className="bg-white/5 px-2 py-1 rounded text-[9px] text-white/50 uppercase tracking-widest whitespace-nowrap">{college.state}</span>
                        </div>
                      </div>
                      <p className="text-xs text-white/40 uppercase tracking-widest">{college.location}</p>
                      <div className="flex justify-between items-start mt-2">
                        <button 
                           onClick={() => toggleCompare(college.id)}
                           className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-white/50 hover:text-emerald-400 transition-colors"
                        >
                           {compareList.includes(college.id) ? <CheckSquare className="text-emerald-400" size={14} /> : <Square size={14} />} 
                           {compareList.includes(college.id) ? "Selected" : "Compare"}
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mt-1 text-sm">
                      <div className="bg-black/30 border border-white/5 p-3 rounded-xl flex flex-col justify-center relative overflow-hidden">
                        <span className="text-xs text-white/30 uppercase tracking-wider mb-1 font-bold">Fees structure</span>
                        <span className="text-white/80 font-mono text-xs">{college.fees}</span>
                      </div>
                      <div className="bg-black/30 border border-white/5 p-3 rounded-xl flex flex-col justify-center">
                        <span className="text-xs text-white/30 uppercase tracking-wider mb-1 font-bold">Placements</span>
                        <span className="text-emerald-400/90 text-xs lines-clamp-3 leading-snug">{college.placements}</span>
                      </div>
                    </div>
                    
                    <div className="bg-black/30 border border-white/5 p-3 rounded-xl text-sm flex flex-col justify-center mt-1">
                      <span className="text-xs text-white/30 uppercase tracking-wider mb-1.5 font-bold">Academics & Courses</span>
                      <div className="flex flex-wrap gap-2">
                        {college.coursesInfo?.map((course, idx) => (
                           <span key={idx} className="bg-white/5 border border-white/10 px-2 py-1 rounded text-[10px] text-white/80 whitespace-nowrap flex items-center gap-1.5">
                             <span className="text-emerald-400 font-bold">{course.level}</span>
                             <span>{course.name}</span>
                             <span className="text-white/40">({course.durationYears}Y)</span>
                           </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 mt-1 text-sm">
                      <div className="bg-black/30 border border-white/5 p-3 rounded-xl flex flex-col justify-center">
                        <span className="text-xs text-white/30 uppercase tracking-wider mb-1 font-bold">Curriculum & Faculty</span>
                        <p className="text-white/70 text-xs mb-2 leading-relaxed">{college.curriculumInfo}</p>
                        <p className="text-white/50 text-[10px] italic">Faculty: {college.facultyDetails}</p>
                      </div>
                      
                      <div className="bg-black/30 border border-white/5 p-3 rounded-xl flex flex-col justify-center">
                        <span className="text-xs text-white/30 uppercase tracking-wider mb-1 font-bold">Exams & Eligibility</span>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {college.eligibilityFactors?.acceptedExams?.map((exam, idx) => (
                             <span key={idx} className="text-[10px] font-bold tracking-wider uppercase text-yellow-400/90 bg-yellow-400/10 border border-yellow-400/20 px-2 py-0.5 rounded">
                               {exam}
                             </span>
                          ))}
                        </div>
                        <ul className="text-white/60 text-[11px] leading-snug space-y-1">
                           <li>• Education: {college.eligibilityFactors?.requiredEducation}</li>
                           <li>• Standard Age: {college.eligibilityFactors?.minAge}+ Years</li>
                           <li>• State Domicile: {college.eligibilityFactors?.stateDomicile}</li>
                        </ul>
                      </div>

                      <div className="bg-black/30 border border-white/5 p-3 rounded-xl flex flex-col justify-center">
                        <span className="text-xs text-white/30 uppercase tracking-wider mb-1.5 font-bold">Laboratories & Facilities</span>
                        <div className="flex flex-wrap gap-2">
                          {college.laboratories?.map((lab, idx) => (
                             <span key={idx} className="text-[10px] text-emerald-400/80 bg-emerald-500/10 border border-emerald-500/10 px-2 py-0.5 rounded whitespace-nowrap">
                               {lab}
                             </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-2 flex items-center gap-3">
                      <a href={college.link} target="_blank" rel="noreferrer" className="flex-1 text-center text-xs items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-500/10 hover:bg-emerald-500/20 px-3 py-2 rounded-lg border border-emerald-500/20 font-bold tracking-wide">
                        Official Website <span className="text-[10px]">↗</span>
                      </a>
                      <a href={college.brochureLink} target="_blank" rel="noreferrer" className="flex-1 text-center text-xs items-center gap-1.5 text-white/60 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-2 rounded-lg border border-white/10 font-bold tracking-wide">
                        View Brochure <span className="text-[10px]">↗</span>
                      </a>
                    </div>
                  </div>
                ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

