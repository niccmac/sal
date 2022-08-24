// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqLU_gEUgPfO_AJOc98B0k2hkAJP2x3Ko",
  authDomain: "sall-b059b.firebaseapp.com",
  projectId: "sall-b059b",
  storageBucket: "sall-b059b.appspot.com",
  messagingSenderId: "933299375895",
  appId: "1:933299375895:web:c908895ae368f1a265b152"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app };
