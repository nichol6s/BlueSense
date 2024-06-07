import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWzXZW_EW60llbpHVRSOoyFkFYpa_Ma-U",
  authDomain: "bluesense-database.firebaseapp.com",
  projectId: "bluesense-database",
  storageBucket: "bluesense-database.appspot.com",
  messagingSenderId: "290498466335",
  appId: "1:290498466335:web:f009d1aa8e1514ca69bb2a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };