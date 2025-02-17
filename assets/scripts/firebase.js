import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCHQupKKWIeJvBL7CItQYVDkH2ioMScyEA",
  authDomain: "website-assignment-336da.firebaseapp.com",
  projectId: "website-assignment-336da",
  storageBucket: "website-assignment-336da.firebasestorage.app",
  messagingSenderId: "251346372536",
  appId: "1:251346372536:web:595cbc111a2d40eca6f14d",
  measurementId: "G-0X6TL3BWR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };