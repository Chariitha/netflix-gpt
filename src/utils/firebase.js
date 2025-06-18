// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "***REMOVED***AHbOiipEpemQ",
  authDomain: "netflixgpt-deead.firebaseapp.com",
  projectId: "netflixgpt-deead",
  storageBucket: "netflixgpt-deead.firebasestorage.app",
  messagingSenderId: "984507551256",
  appId: "1:984507551256:web:c991d66964f21e68797d6d",
  measurementId: "G-FSW64YJHV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();