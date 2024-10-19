import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAcea1GtTyUzBuVXLeZb6X1FwsCTm4bTjQ",
  authDomain: "expense-x-1e735.firebaseapp.com",
  projectId: "expense-x-1e735",
  storageBucket: "expense-x-1e735.appspot.com",
  messagingSenderId: "134459312200",
  appId: "1:134459312200:web:9da13f725042384573f07d",
  measurementId: "G-MDPS5FG28W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)