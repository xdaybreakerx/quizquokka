// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0_vkkY278coPFxB15933CDkpSxlny5_A",
    authDomain: "quizquokka-5f7fa.firebaseapp.com",
    projectId: "quizquokka-5f7fa",
    storageBucket: "quizquokka-5f7fa.appspot.com",
    messagingSenderId: "377588266099",
    appId: "1:377588266099:web:7a707acf64d8873d126606",
    measurementId: "G-T7RF1SN8KC"
};

// Initialize Firebase and Analytics 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialise the Firestore DB and get a reference to the service
export const db = getFirestore(app);