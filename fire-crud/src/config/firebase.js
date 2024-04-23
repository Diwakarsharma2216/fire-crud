// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmoR5vkybBwwf5iuVXl6W4murxJG03_W4",
  authDomain: "realpro-bd065.firebaseapp.com",
  projectId: "realpro-bd065",
  storageBucket: "realpro-bd065.appspot.com",
  messagingSenderId: "388289861669",
  appId: "1:388289861669:web:7f4da014aafd119ced07cc",
  measurementId: "G-TSP89SVP6Z"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

export const provider =new GoogleAuthProvider()
 export const auth = getAuth(app);
 export const db = getFirestore(app);