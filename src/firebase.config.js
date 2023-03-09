// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLFa3iEvJMpPf4gYiYk_EhCTsDA7-yIp8",
    authDomain: "efurniture-6951a.firebaseapp.com",
    projectId: "efurniture-6951a",
    storageBucket: "efurniture-6951a.appspot.com",
    messagingSenderId: "313385821160",
    appId: "1:313385821160:web:5f05c325459d28a0337a5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;