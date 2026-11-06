import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD477DG7zeTuJmf6YGQzKc4LInnRvcfZ3A",
  authDomain: "week8-44ea4.firebaseapp.com",
  projectId: "week8-44ea4",
  storageBucket: "week8-44ea4.firebasestorage.app",
  messagingSenderId: "241932749753",
  appId: "1:241932749753:web:e60ec0eaa4ce95db8a8468",
  measurementId: "G-Q2ZKW8SEQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);