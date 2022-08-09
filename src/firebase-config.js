// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkC_pwi-T7IOHS-DVHQ4nNAzi8EJ1rKVI",
  authDomain: "fir-email-practice-e5113.firebaseapp.com",
  projectId: "fir-email-practice-e5113",
  storageBucket: "fir-email-practice-e5113.appspot.com",
  messagingSenderId: "113991245998",
  appId: "1:113991245998:web:03ac68e62fb3088d3f0d3f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const db = getFirestore(app);

export default db;
