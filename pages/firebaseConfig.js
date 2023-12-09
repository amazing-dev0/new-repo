import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAIYa41tHiF-fNtpUWkBQz71IYEgdFUBWM",
  authDomain: "poopoo-d6c57.firebaseapp.com",
  databaseURL: "https://poopoo-d6c57-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "poopoo-d6c57",
  storageBucket: "poopoo-d6c57.appspot.com",
  messagingSenderId: "400457507261",
  appId: "1:400457507261:web:ab2d564ba9be535482b2d4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};