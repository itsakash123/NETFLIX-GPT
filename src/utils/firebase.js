// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbg3PTpdtGStCyuoqMlCVgNAVOJ-h3_VE",
  authDomain: "netflixgpt-6d651.firebaseapp.com",
  projectId: "netflixgpt-6d651",
  storageBucket: "netflixgpt-6d651.firebasestorage.app",
  messagingSenderId: "98635656850",
  appId: "1:98635656850:web:4618baf764848edbdb004b",
  measurementId: "G-JCSHLY4DME",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth=getAuth(); 
