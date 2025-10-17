📱 Firebase Phone Authentication (Vanilla JS Setup)

This project demonstrates how to integrate Firebase Authentication (Email/Password + Phone Number) in a vanilla JavaScript web app — without any frameworks like React or Vue.

🚀 Features

🔐 Firebase Authentication setup using modular SDK (v12+)

📧 Email & Password Sign-Up / Sign-In

☎️ Phone Number Authentication with reCAPTCHA

📤 Email Verification support

📦 Clean modular structure (firebase.js, app.js, index.html)

🧩 .gitignore configured to protect API keys from being committed

🗂️ Project Structure
FIREBASE-PHONE-AUTHENTICATION/
│
├── .gitignore             # Ignores firebase.js (to protect your keys)
├── index.html             # Front-end UI
├── app.js                 # Main logic for user authentication
└── firebase.js            # Firebase initialization (ignored in Git)

⚙️ Firebase Setup

Go to Firebase Console
.

Create a new project or select an existing one.

Enable Email/Password and Phone authentication under
Build → Authentication → Sign-in method.

Copy your project’s Firebase config from the Project Settings → General tab.

Replace the config object inside firebase.js:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

💻 How to Run

Clone this repository:

git clone https://github.com/your-username/firebase-phone-authentication.git
cd firebase-phone-authentication


Create a file named firebase.js (if not present):

touch firebase.js


Paste your Firebase setup code into it:

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

const firebaseConfig = {
  // your config here
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  RecaptchaVerifier,
  signInWithPhoneNumber
};


Make sure your .gitignore file includes:

firebase.js


Open index.html in your browser directly or use a local server (like VS Code’s Live Server).

🧠 Notes

Never expose your Firebase credentials in a public Git repo.
Use .gitignore to protect sensitive files like firebase.js.

You can create a firebase.example.js with the same structure but fake keys for collaborators.

📄 License

This project is open source and available under the MIT License
.