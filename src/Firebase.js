import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore" 

const firebaseConfig = {

  apiKey: "AIzaSyDCHAD4nPudzWwkKxinCrVJXk6iBRyGyfo",
  authDomain: "expensex-ff507.firebaseapp.com",
  projectId: "expensex-ff507",
  storageBucket: "expensex-ff507.appspot.com",
  messagingSenderId: "837720852661",
  appId: "1:837720852661:web:b8b827af4c2dd9aa1196fc",
  measurementId: "G-PER7B327M6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);