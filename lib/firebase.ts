// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8CCzanzCAgHfeAtRHE3_o2By1mjsNsYI",
  authDomain: "accommodations-e3cda.firebaseapp.com",
  projectId: "accommodations-e3cda",
  storageBucket: "accommodations-e3cda.appspot.com",
  messagingSenderId: "1036454413563",
  appId: "1:1036454413563:web:c6a89d61a031c0e3435c5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
