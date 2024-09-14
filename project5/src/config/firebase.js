// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh2YkkfB9oooITjdqvz5qVANff5oNz91Q",
  authDomain: "react-contact-fb710.firebaseapp.com",
  projectId: "react-contact-fb710",
  storageBucket: "react-contact-fb710.appspot.com",
  messagingSenderId: "355993048684",
  appId: "1:355993048684:web:89cc72212dc031dc7c6a49"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);