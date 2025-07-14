// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCRhQdzLfUf3dncazF1yBj-xKa_T0Hq18",
  authDomain: "netflix-gpt-6cdc6.firebaseapp.com",
  projectId: "netflix-gpt-6cdc6",
  storageBucket: "netflix-gpt-6cdc6.firebasestorage.app",
  messagingSenderId: "227826741181",
  appId: "1:227826741181:web:b5af31c6a1f4729090acd4",
  measurementId: "G-7PLBLK07XX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
