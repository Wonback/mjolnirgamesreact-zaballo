// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFEi7SDNcktdOUwxzzfKTVdM9vTbGQFzM",
  authDomain: "mjolnir-games.firebaseapp.com",
  projectId: "mjolnir-games",
  storageBucket: "mjolnir-games.appspot.com",
  messagingSenderId: "377770536602",
  appId: "1:377770536602:web:0df9ba82f27a9e99daf923",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () => {
  return app;
};
