import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

const firebase = require("firebase/")

import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  EmailAuthProvider,
  PhoneAuthProvider,
} from "./firebase.js";

// FirebaseUI config
const uiConfig = {
  signInSuccessUrl: "www.google.com",
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    FacebookAuthProvider.PROVIDER_ID,
    TwitterAuthProvider.PROVIDER_ID,
    GithubAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID,
    PhoneAuthProvider.PROVIDER_ID,
  ],
  tosUrl: "index.html",
  privacyPolicyUrl: function () {
    window.location.assign("index.html");
  },
};

export function initializeAuthUI(auth) {
  const ui = new firebaseui.auth.AuthUI(auth);
  ui.start("#firebaseui-auth-container", uiConfig);
}
