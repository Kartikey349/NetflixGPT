// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFE_hX25frn9g1y6rELOwF2gUn8uL_GD8",
  authDomain: "netflixgpt-1736e.firebaseapp.com",
  projectId: "netflixgpt-1736e",
  storageBucket: "netflixgpt-1736e.firebasestorage.app",
  messagingSenderId: "500338845270",
  appId: "1:500338845270:web:132081eb2cb207f051bdf7",
  measurementId: "G-EG3LM2BRVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();