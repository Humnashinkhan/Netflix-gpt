// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA59XWj8xOB2bwicIn8macqMu6Mdg7J9MU",
  authDomain: "netflixgpt-1076c.firebaseapp.com",
  projectId: "netflixgpt-1076c",
  storageBucket: "netflixgpt-1076c.appspot.com",
  messagingSenderId: "156554674529",
  appId: "1:156554674529:web:6269882123488a97100520",
  measurementId: "G-G2QCSYJBYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();
