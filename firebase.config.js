// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAPSmERRYcLi2qmpjF8xY6xSOeSHnA468",
  authDomain: "buzzer-app-f704f.firebaseapp.com",
  projectId: "buzzer-app-f704f",
  storageBucket: "buzzer-app-f704f.appspot.com",
  messagingSenderId: "452521274049",
  appId: "1:452521274049:web:8af5ab458c3e8ff15f4240",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// *** Cloud Firestore (Firebase Database).
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
