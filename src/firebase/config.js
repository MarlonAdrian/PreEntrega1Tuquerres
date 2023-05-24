// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJoxeBm2URyb-dqKrW0XVrcSP98Yy3J34",
  authDomain: "react0a.firebaseapp.com",
  projectId: "react0a",
  storageBucket: "react0a.appspot.com",
  messagingSenderId: "896994024818",
  appId: "1:896994024818:web:89bd06a4a71728d39751eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const initFirebase= ()=>app