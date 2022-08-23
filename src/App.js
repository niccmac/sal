import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { initializeApp } from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
// import ChatMessage from "./components/chat";
import ChatBox from "./components/chatBox";
import SignIn from "./components/signin";

const app = initializeApp(process.env.firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header"></header>
      <section>{user ? <ChatBox /> : <SignIn />}</section>
    </div>
  );
}

export default App;
