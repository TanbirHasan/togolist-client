// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6gXbq2FklObUTOJnnzVuI0m3ujsg2fHY",
  authDomain: "todolist-375e3.firebaseapp.com",
  projectId: "todolist-375e3",
  storageBucket: "todolist-375e3.appspot.com",
  messagingSenderId: "655868085938",
  appId: "1:655868085938:web:94de174ba3f8aa23e66bab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default getAuth;
