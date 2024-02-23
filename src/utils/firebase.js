// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "degendish-b4460.firebaseapp.com",
  projectId: "degendish-b4460",
  storageBucket: "degendish-b4460.appspot.com",
  messagingSenderId: "855579830814",
  appId: "1:855579830814:web:a135a4aaad0b6e1ec15c0f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);