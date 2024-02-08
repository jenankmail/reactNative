import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyByVWyz2jKC059hAigoE9eMyfeky3PaAyw",
  authDomain: "gcc-chat-7aec9.firebaseapp.com",
  projectId: "gcc-chat-7aec9",
  storageBucket: "gcc-chat-7aec9.appspot.com",
  messagingSenderId: "127932556812",
  appId: "1:127932556812:web:efb7370031d9fef4227029"
};


// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);  

export { db , auth};