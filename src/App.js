import "./App.css";
import { UserAuth } from "./providers/GoogleAuthProvider";

import { auth } from "./firebase";
import { Route, Routes } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./components/signin";
import HomePage from "./components/homepage";

function App() {
  const { user } = UserAuth();

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
