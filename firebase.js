
// Nerdy Google Firebase Stuff

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth ,GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyB1ci4dHbYtfgrEYHjcUGowzGXZ-X2q7no",
  authDomain: "engineering-hub-98c66.firebaseapp.com",
  projectId: "engineering-hub-98c66",
  storageBucket: "engineering-hub-98c66.appspot.com",
  messagingSenderId: "964067525118",
  appId: "1:964067525118:web:48db502acf69e9c01540af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const button = document.getElementById('loginbutton');

button.addEventListener("click", () => {

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    // redirect user to homepage
    window.location.href = "../index.html";

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
  
})



// Check whether the user is signed in or not and then display the user's name

const dropdownButton = document.getElementById('dropdownButton');
 function loginCheck() {
  if (auth.currentUser) {
    // User is signed in.
    const uid = auth.currentUser.uid;
    console.log(uid);
    dropdownButton.childNodes[0].nodeValue = auth.currentUser.displayName;
  }
 }

