import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import ChatBox from "./components/chatBox";
import SignIn from "./components/signin";
// import ChatMessage from "./components/chat";

// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";
import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAqLU_gEUgPfO_AJOc98B0k2hkAJP2x3Ko",
  authDomain: "sall-b059b.firebaseapp.com",
  projectId: "sall-b059b",
  storageBucket: "sall-b059b.appspot.com",
  messagingSenderId: "933299375895",
  appId: "1:933299375895:web:c908895ae368f1a265b152"
};
const app = firebase.initializeApp(firebaseConfig);

// const db = getFirestore(app);

// const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();
