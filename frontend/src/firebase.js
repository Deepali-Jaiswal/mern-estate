// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-851f1.firebaseapp.com",
  projectId: "mern-estate-851f1",
  storageBucket: "mern-estate-851f1.firebasestorage.app",
  messagingSenderId: "900809585595",
  appId: "1:900809585595:web:d392aacd997796a8178a9e",
  measurementId: "G-9MRJ3SHX0S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);