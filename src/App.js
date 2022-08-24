import "./App.css";
import ChatBox from "./components/chatBox";
import { GoogleAuthContext } from "./providers/GoogleAuthProvider";
import { auth } from "./components/firebase";
import { Route, Routes } from "react-router-dom";
import { firestore } from "firebase/firestore";
import { initializeAuth } from "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import SignIn from "./components/signin";

// const auth = initializeAuth(app);
// const firestore = firestore();
// const analytics = analytics();

function App() {
  const [user] = useAuthState(auth);

  return (
    <GoogleAuthContext>
      <Routes></Routes>
      <div className="App">
        <header className="App-header">
          {/* <div>other</div> */}
          {/* <section>{user ? <ChatBox /> : "sign ins"}</section> */}
          {/* <SignIn /> */}
          <SignIn auth={auth} />
        </header>
      </div>
    </GoogleAuthContext>
  );
}

export default App;
