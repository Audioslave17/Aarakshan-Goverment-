// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDcrZwp4mlrZidlJ5bttDaerVAtw1apzYs",
  authDomain: "aarakshan-dbc79.firebaseapp.com",
  projectId: "aarakshan-dbc79",
  storageBucket: "aarakshan-dbc79.appspot.com",
  messagingSenderId: "850667896546",
  appId: "1:850667896546:web:d52dea887b00186616a8bb",
  measurementId: "G-M81ZSHY4VL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
