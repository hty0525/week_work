// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc,updateDoc,setDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY,
  authDomain: "react-hanghae.firebaseapp.com",
  projectId: "react-hanghae",
  storageBucket: "react-hanghae.appspot.com",
  messagingSenderId: "283694373706",
  appId: "1:283694373706:web:f048da1082f8887198ffb3",
  measurementId: "G-D3KV92P11K"
};
// Initialize Firebase
initializeApp(firebaseConfig)
//const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db