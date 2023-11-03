// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-cb9a3.firebaseapp.com",
  projectId: "mern-cb9a3",
  storageBucket: "mern-cb9a3.appspot.com",
  messagingSenderId: "988404648579",
  appId: "1:988404648579:web:283bc39d5dbb3e22c9e9b6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
