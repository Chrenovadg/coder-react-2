import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDY6JlC5ZEOIjOtgBUtnxY96A-25WTb1po",
  authDomain: "awuit-33fcf.firebaseapp.com",
  projectId: "awuit-33fcf",
  storageBucket: "awuit-33fcf.appspot.com",
  messagingSenderId: "868152720995",
  appId: "1:868152720995:web:05e8b4703f3a3d28a58256"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)