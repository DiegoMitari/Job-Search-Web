// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhe5WL-VgxDGlE8PAPRp8QsMu3AL1lVYA",
  authDomain: "search-job-1388e.firebaseapp.com",
  projectId: "search-job-1388e",
  storageBucket: "search-job-1388e.appspot.com",
  messagingSenderId: "926099503513",
  appId: "1:926099503513:web:0e24674df29d7493687b08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

const db = getFirestore(app);

export { db };