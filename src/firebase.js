import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "@firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE9fwzYI0slwDU5PXtXTxS8sE2cCs7Y4Q",
  authDomain: "portfolio-c3e66.firebaseapp.com",
  projectId: "portfolio-c3e66",
  storageBucket: "portfolio-c3e66.firebasestorage.app",
  messagingSenderId: "324121120845",
  appId: "1:324121120845:web:0ba3d6fef82b92b08c8c04",
  measurementId: "G-J27560PHFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };