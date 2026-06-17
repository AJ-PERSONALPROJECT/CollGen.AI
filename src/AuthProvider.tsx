import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, googleProvider, db, handleFirestoreError, OperationType } from './firebase';
import { doc, getDocFromServer, setDoc, serverTimestamp } from 'firebase/firestore';

interface UserProfile {
  userId: string;
  role: string;
  email?: string;
  displayName?: string;
}

export interface UserPreferences {
  preferredCourses?: string[];
  targetLocations?: string[];
  language?: string;
  theme?: string;
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  preferences: UserPreferences | null;
  loading: boolean;
  signIn: () => Promise<void>;
  logOut: () => Promise<void>;
  updateRole: (role: string) => Promise<void>;
  updatePreferences: (prefs: Partial<UserPreferences>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Validate connection
    const testConnection = async () => {
      try {
        await getDocFromServer(doc(db, 'test', 'connection'));
      } catch (error) {
        if (error instanceof Error && error.message.includes('the client is offline')) {
          console.error("Please check your Firebase configuration.");
        }
      }
    };
    testConnection();

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const docRef = doc(db, 'users', currentUser.uid);
          const docSnap = await getDocFromServer(docRef).catch(e => {
            handleFirestoreError(e, OperationType.GET, `users/${currentUser.uid}`);
            return null;
          });
          
          if (docSnap && docSnap.exists()) {
            setProfile(docSnap.data() as UserProfile);
          } else {
             // Let user select role initially, default to guest
             setProfile({ userId: currentUser.uid, role: 'guest', email: currentUser.email || undefined, displayName: currentUser.displayName || undefined });
          }

          const prefRef = doc(db, 'users', currentUser.uid, 'preferences', 'default');
          const prefSnap = await getDocFromServer(prefRef).catch(e => {
            handleFirestoreError(e, OperationType.GET, `users/${currentUser.uid}/preferences/default`);
            return null;
          });
          if (prefSnap && prefSnap.exists()) {
            setPreferences(prefSnap.data() as UserPreferences);
          } else {
            setPreferences({ language: 'en-US', theme: 'dark' });
          }
        } catch (error) {
          console.error("Error fetching user profile", error);
        }
      } else {
        setProfile(null);
        setPreferences({ language: 'en-US', theme: 'dark' });
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Sign in failed", error);
    }
  };

  const logOut = async () => {
    await signOut(auth);
  };

  const updateRole = async (role: string) => {
     if (!user) return;
     try {
       const userRef = doc(db, 'users', user.uid);
       const docSnap = await getDocFromServer(userRef);
       if (docSnap.exists()) {
          await setDoc(userRef, { role, updatedAt: serverTimestamp() }, { merge: true }).catch(err => handleFirestoreError(err, OperationType.UPDATE, `users/${user.uid}`));
       } else {
          await setDoc(userRef, {
             userId: user.uid,
             role,
             email: user.email || '',
             displayName: user.displayName || '',
             createdAt: serverTimestamp(),
             updatedAt: serverTimestamp()
          }).catch(err => handleFirestoreError(err, OperationType.CREATE, `users/${user.uid}`));
       }
       setProfile(prev => prev ? { ...prev, role } : { userId: user.uid, role, email: user.email || '', displayName: user.displayName || '' });
     } catch (error) {
       console.error("Failed to update role", error);
     }
  }

  const updatePreferences = async (prefs: Partial<UserPreferences>) => {
    if (user) {
      const prefRef = doc(db, 'users', user.uid, 'preferences', 'default');
      const docSnap = await getDocFromServer(prefRef);
      if (docSnap.exists()) {
        await setDoc(prefRef, { ...prefs, updatedAt: serverTimestamp() }, { merge: true }).catch(err => handleFirestoreError(err, OperationType.UPDATE, `users/${user.uid}/preferences/default`));
      } else {
        await setDoc(prefRef, { ...prefs, updatedAt: serverTimestamp() }).catch(err => handleFirestoreError(err, OperationType.CREATE, `users/${user.uid}/preferences/default`));
      }
    }
    setPreferences(prev => ({ ...prev, ...prefs }));
  }

  return (
    <AuthContext.Provider value={{ user, profile, preferences, loading, signIn, logOut, updateRole, updatePreferences }}>
      {children}
    </AuthContext.Provider>
  );
};
