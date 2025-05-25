// firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔒 DO NOT import analytics unless you guard it with typeof window
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBz0KWfin9vvdlnIw8haDfBVg1Z7lcBzCE",
  authDomain: "rank-slice.firebaseapp.com",
  projectId: "rank-slice",
  storageBucket: "rank-slice.firebasestorage.app",
  messagingSenderId: "878755416343",
  appId: "1:878755416343:web:96d0daac875ff8e040cf52",
  measurementId: "G-RBW7J3XHDR",
};

// ✅ Initialize the app
const app = initializeApp(firebaseConfig);

// ✅ Add this line to fix the error
export const db = getFirestore(app);
