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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);





function createNewUser(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the email and password values from the form
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Create the new user with Firebase Authentication
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // Additional logic after successful user creation
      console.log("New user created:", user);
      // You can also redirect the user to another page or perform other actions

      
      window.location.href = "about.html"
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Error handling
      console.error("Error creating user:", errorMessage);
      // You can display an error message to the user or perform other error handling
      console.log('Auth object:', auth);

    });
}


document.addEventListener("DOMContentLoaded", function () {
  
    const form = document.querySelector("form");

    form.addEventListener("submit", testOne);
  

  console.log("test");
});

function testOne(event) {
  event.preventDefault();

  loginExistingUser();
}

function loginExistingUser() {
  // Get the email and password values from the form
  const email = document.getElementById("Firstemail").value;
  const password = document.getElementById("Firstpassword").value;

  // Login functionality

  
  
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      console.log("Logged in user:", user);
      

      // Redirect the user to a different page or perform other actions
      window.location.href = "about.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error logging in user:", errorMessage);
      // Display an error message to the user or perform other error handling
    });
    

}


