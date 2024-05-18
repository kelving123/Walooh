// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3blbLVYY78VqucJWyzuWkakBbz8rquJ0",
  authDomain: "walooh-6834f.firebaseapp.com",
  projectId: "walooh-6834f",
  storageBucket: "walooh-6834f.appspot.com",
  messagingSenderId: "987853113362",
  appId: "1:987853113362:web:dd5ab2f6e02d28a3bcb0cb",
  measurementId: "G-QKKEJBWXYV",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// FirebaseUI config
var uiConfig = {
  signInSuccessUrl: "www.google.com",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
  ],
  tosUrl: "index.html",
  privacyPolicyUrl: function () {
    window.location.assign("index.html");
  },
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start("#firebaseui-auth-container", uiConfig);
