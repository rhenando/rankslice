// /firebase/config.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBz0KWfin9vvdlnIw8haDfBVg1Z7lcBzCE",
  authDomain: "rank-slice.firebaseapp.com",
  projectId: "rank-slice",
  storageBucket: "rank-slice.appspot.com", // ⚠️ fixed typo here (it was .firebasestorage.app)
  messagingSenderId: "878755416343",
  appId: "1:878755416343:web:96d0daac875ff8e040cf52",
  measurementId: "G-RBW7J3XHDR",
};

// Prevent re-initialization
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
