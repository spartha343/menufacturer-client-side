// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcXhHiy9YjWAqCY5KY56wSxl5WYt3ypXg",
    authDomain: "assignment-12-client-44b01.firebaseapp.com",
    projectId: "assignment-12-client-44b01",
    storageBucket: "assignment-12-client-44b01.appspot.com",
    messagingSenderId: "500023863779",
    appId: "1:500023863779:web:d17c2176f451acbfa658d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;