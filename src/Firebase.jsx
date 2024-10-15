// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import the getAuth function

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKpQULesRkXz3ZQuOsC7HZ1HZSYAcAZTA",
  authDomain: "aj-universe-2b239.firebaseapp.com",
  projectId: "aj-universe-2b239",
  storageBucket: "aj-universe-2b239.appspot.com",
  messagingSenderId: "237897054055",
  appId: "1:237897054055:web:9b0e29f48ec17c0f51a1c2",
  measurementId: "G-TZQLC0W11M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and export it
const auth = getAuth(app);

export { auth }; // Export the auth instance
