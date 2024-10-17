import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCG9x2bPzz06lM9ODzsN9OMaAygAc1CNP8",
  authDomain: "minicore-dce9c.firebaseapp.com",
  projectId: "minicore-dce9c",
  storageBucket: "minicore-dce9c.appspot.com",
  messagingSenderId: "279202577132",
  appId: "1:279202577132:web:b6a10a58ed4da7bf3083c9",
  measurementId: "G-FCG3DP0KHJ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
