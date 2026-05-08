// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyABhIXkK4JV2seQQ2sSClFNeDuQ5rAIyc0",
  authDomain: "taskmanager-fc125.firebaseapp.com",
  projectId: "taskmanager-fc125",
  storageBucket: "taskmanager-fc125.firebasestorage.app",
  messagingSenderId: "9337299550",
  appId: "1:9337299550:web:b463ca0ff95fa69b578acf",
  measurementId: "G-L6XLX8V0G1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);