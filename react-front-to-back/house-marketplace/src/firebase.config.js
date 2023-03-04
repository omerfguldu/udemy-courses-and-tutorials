import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQPKQS7druCUJBG8bOhQ126c_pQBlMHOg",
  authDomain: "house-marketplace-app-9cbc5.firebaseapp.com",
  projectId: "house-marketplace-app-9cbc5",
  storageBucket: "house-marketplace-app-9cbc5.appspot.com",
  messagingSenderId: "749481446223",
  appId: "1:749481446223:web:e9e5dc8e94fddeb530d33a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
