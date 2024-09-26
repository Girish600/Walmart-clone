import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBhxitcIOocSlxMdW05iehyLTmcdwVO_w4",
    authDomain: "walmart-clone-ce0d9.firebaseapp.com",
    projectId: "walmart-clone-ce0d9",
    storageBucket: "walmart-clone-ce0d9.appspot.com",
    messagingSenderId: "187099965376",
    appId: "1:187099965376:web:022ba6dd5b582fa28c0a25",
    measurementId: "G-XSFWD0VK4Y"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };