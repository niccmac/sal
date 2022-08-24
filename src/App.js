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
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </header>
      </div>
    </GoogleAuthContext>
  );
}

export default App;
