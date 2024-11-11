// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzYM1xwretmbxO_JwSrfSS5_TdSTfOcUw",
  authDomain: "auth-moha-milon-78d6b.firebaseapp.com",
  projectId: "auth-moha-milon-78d6b",
  storageBucket: "auth-moha-milon-78d6b.firebasestorage.app",
  messagingSenderId: "50594786230",
  appId: "1:50594786230:web:b8030f2dd4bfe9c888af17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);