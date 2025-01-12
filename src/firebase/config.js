import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB9pofsydjgpIPBN0mRbOD17GyAzr4SvE4",
    authDomain: "re-plays.firebaseapp.com",
    projectId: "re-plays",
    storageBucket: "re-plays.firebasestorage.app",
    messagingSenderId: "24702629254",
    appId: "1:24702629254:web:35452975c461113b476807"
};

export const app = initializeApp(firebaseConfig);