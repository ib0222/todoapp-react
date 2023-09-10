// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH2xvs5neQywhY2teKiKPlJlXezGoBGC8",
  authDomain: "todo-app-8d8c5.firebaseapp.com",
  projectId: "todo-app-8d8c5",
  storageBucket: "todo-app-8d8c5.appspot.com",
  messagingSenderId: "373284084059",
  appId: "1:373284084059:web:f4a0908c3fd5987471627e",
  measurementId: "G-2121CGYBR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)