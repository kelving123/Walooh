// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js"


import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  EmailAuthProvider,
  PhoneAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3blbLVYY78VqucJWyzuWkakBbz8rquJ0",
  authDomain: "walooh-6834f.firebaseapp.com",
  projectId: "walooh-6834f",
  storageBucket: "walooh-6834f.appspot.com",
  messagingSenderId: "987853113362",
  appId: "1:987853113362:web:dd5ab2f6e02d28a3bcb0cb",
  measurementId: "G-QKKEJBWXYV",
};

const emailElement = document.getElementById("user-email");
      emailElement.textContent = `Welcome, ${user.email}!`;


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);