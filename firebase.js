import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword } from 'firebase/auth';
import "firebase/firestore";
import { getFirestore,firestore ,collection} from "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvJkYMPZmpJaRDoYNrg_gJQlE62y_USIc",
  authDomain: "corecomponents-24d0c.firebaseapp.com",
  projectId: "corecomponents-24d0c",
  storageBucket: "corecomponents-24d0c.appspot.com",
  messagingSenderId: "832425457976",
  appId: "1:832425457976:web:eb57b9f75fc6cd8447a9cd"
};


const app = initializeApp(firebaseConfig);

// Get the Auth instance from the initialized app
const auth = getAuth(app);
const db = getFirestore(app);

const addUser = async () => {
  await db.collection('users').add({
    name: 'John Doe',
    age: 30,
  });
};




export {  auth , db ,addUser, collection  };