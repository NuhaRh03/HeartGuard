import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// IMPORTANT: Replace with your own Firebase project configuration.

const firebaseConfig = {
  apiKey: "AIzaSyC5w1ipy5esITK_dzNw3QHbnDRfZsvKgvQ",
  authDomain: "hearthbeat-b0a18.firebaseapp.com",
  projectId: "hearthbeat-b0a18",
  storageBucket: "hearthbeat-b0a18.firebasestorage.app",
  messagingSenderId: "374420021601",
  appId: "1:374420021601:web:9c8bef7c682896dbed2520",
  measurementId: "G-BN5L6GGT55"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
