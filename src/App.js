import "./App.css";
import ChatBox from "./components/chatBox";
import { GoogleAuthContext } from "./providers/GoogleAuthProvider";
import { auth } from "./components/firebase";
import { Route, Routes } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./components/signin";
import HomePage from "./components/homepage";

function App() {
  const [user] = useAuthState(auth);

  return (
    <GoogleAuthContext>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <div className="App">
        <header className="App-header">
          <section>{user ? <ChatBox /> : "sign ins"}</section>
          <SignIn />
        </header>
      </div>
    </GoogleAuthContext>
  );
}

export default App;
