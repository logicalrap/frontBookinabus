// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxWV3IzByIcVe5QuwnmVshiOzykKmjc-E",
  authDomain: "bukabus-43a72.firebaseapp.com",
  projectId: "bukabus-43a72",
  storageBucket: "bukabus-43a72.firebasestorage.app",
  messagingSenderId: "951308522332",
  appId: "1:951308522332:web:aea6805ccef0f2834e6799"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
export const auth = getAuth(app);
