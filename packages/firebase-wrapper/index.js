import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fs = firebase.firestore();
export const storage = firebase.storage();
export const fn = firebase.functions();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp();
export const now = firebase.firestore.Timestamp.now()
export const storageStateChanged = firebase.storage.TaskEvent.STATE_CHANGED;
export const EmailAuthProvider = firebase.auth.EmailAuthProvider;
export const FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
export const GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
export const increment = firebase.firestore.FieldValue.increment;
export const arrayUnion = firebase.firestore.FieldValue.arrayUnion;