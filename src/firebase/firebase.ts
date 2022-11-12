// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDf2y4uAEcxDNtfEXleOytDDBdp4vNInKQ",
  authDomain: "findme-3303d.firebaseapp.com",
  projectId: "findme-3303d",
  storageBucket: "findme-3303d.appspot.com",
  messagingSenderId: "960236027386",
  appId: "1:960236027386:web:be5be120bf3e14e5e63843",
  measurementId: "G-M85S253C5F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
