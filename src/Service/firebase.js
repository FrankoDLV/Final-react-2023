import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-bVTJnjDR06YND6SG6jUKL2F_6UMgbTw",
  authDomain: "miapp-e1523.firebaseapp.com",
  projectId: "miapp-e1523",
  storageBucket: "miapp-e1523.appspot.com",
  messagingSenderId: "940386488955",
  appId: "1:940386488955:web:2fd7758dfd5d3656c488de",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
