// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc,updateDoc,setDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY,
  projectId: process.env.REACT_APP_ID,
};
// Initialize Firebase
initializeApp(firebaseConfig)
//const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db