// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCYTn6flzAlSDO1q6pZEhe-lL0Y7gKxlk",
  authDomain: "therapist-demo.firebaseapp.com",
  projectId: "therapist-demo",
  storageBucket: "therapist-demo.appspot.com",
  messagingSenderId: "1006523504027",
  appId: "1:1006523504027:web:dae1e559ff4edc2288fd3e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const outlookProvider = new OAuthProvider("microsoft.com");
outlookProvider.setCustomParameters({
  prompt: "select_account",
});
outlookProvider.addScope("email");
outlookProvider.addScope("User.Read");

export {
  auth,
  googleProvider,
  outlookProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
};
