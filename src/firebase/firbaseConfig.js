import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAAdQdzdouLqN8LDyqWDJYt1fn16MfIcLY",
    authDomain: "olcha-clone2.firebaseapp.com",
    projectId: "olcha-clone2",
    storageBucket: "olcha-clone2.appspot.com",
    messagingSenderId: "340000382600",
    appId: "1:340000382600:web:5b943cb8f9c7b85c2f493d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()