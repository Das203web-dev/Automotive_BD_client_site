// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHmxVxAIVOz7DL6yh64s0qm1Tf4KhyZfA",
    authDomain: "automotivebdclientsite.firebaseapp.com",
    projectId: "automotivebdclientsite",
    storageBucket: "automotivebdclientsite.appspot.com",
    messagingSenderId: "456306905341",
    appId: "1:456306905341:web:5769c93c0d0bc7d8306e94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;