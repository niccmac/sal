import "./App.css";
import ChatBox from "./components/chatBox";
import { app } from "./components/firebase";

import { firestore } from "firebase/firestore";
import { initializeAuth } from "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const auth = initializeAuth(app);
// const firestore = firestore();
// const analytics = analytics();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        {/* <div>other</div> */}
        {/* <section>{user ? <ChatBox /> : "sign ins"}</section> */}
        {/* <SignIn /> */}
        Sally
      </header>
    </div>
  );
}

export default App;
