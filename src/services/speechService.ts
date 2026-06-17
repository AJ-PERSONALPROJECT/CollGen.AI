export let currentLanguage = 'en-US';

export function setSpeechLanguage(lang: string) {
  currentLanguage = lang;
}

export function speak(text: string) {
  if (!('speechSynthesis' in window)) return;
  
  // Cancel any ongoing speech
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = currentLanguage;
  utterance.rate = 1.0;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
}

export function startListening(
  lang: string,
  onResult: (text: string) => void, 
  onError: (err: string) => void, 
  onEnd: () => void
): any {
  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  
  if (!SpeechRecognition) {
    onError("Speech recognition is not supported in this browser.");
    onEnd();
    return null;
  }
  
  const recognition = new SpeechRecognition();
  recognition.lang = lang;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event: any) => {
    const transcript = event.results[0][0].transcript;
    onResult(transcript);
  };

  recognition.onerror = (event: any) => {
    onError(event.error);
  };

  recognition.onend = () => {
    onEnd();
  };

  recognition.start();
  return recognition;
}
