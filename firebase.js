// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLQ5WmuQuLopPxgpmgoyYLMdvk-xBK_vk",
    authDomain: "shopping-bf096.firebaseapp.com",
    projectId: "shopping-bf096",
    storageBucket: "shopping-bf096.appspot.com",
    messagingSenderId: "455509198981",
    appId: "1:455509198981:web:18d7e1d96d74cf3bc541ec",

  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;