// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnQTRWJ7FvI41jE1_-X7cA6kBMSXLIayU",
  authDomain: "react-test-a7737.firebaseapp.com",
  projectId: "react-test-a7737",
  storageBucket: "react-test-a7737.firebasestorage.app",
  messagingSenderId: "853221022907",
  appId: "1:853221022907:web:319e0d586abef8a7dadd9e",
  measurementId: "G-Q2H17C5VSW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

