// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSJjjfEwSRCcheJq_TSX6pO-kEzkcaIak",
  authDomain: "juliany-store.firebaseapp.com",
  projectId: "juliany-store",
  storageBucket: "juliany-store.appspot.com",
  messagingSenderId: "959060232160",
  appId: "1:959060232160:web:55abc1e88d39be30868d85",
  measurementId: "G-BSQ6T4E0X6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
