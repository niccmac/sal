import "./App.css";

import { initializeApp } from "firebase/app";
import {} from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAqLU_gEUgPfO_AJOc98B0k2hkAJP2x3Ko",
  authDomain: "sall-b059b.firebaseapp.com",
  projectId: "sall-b059b",
  storageBucket: "sall-b059b.appspot.com",
  messagingSenderId: "933299375895",
  appId: "1:933299375895:web:c908895ae368f1a265b152"
};
const app = initializeApp(firebaseConfig);

// getApp(app);
// const db = getFirestore(app);
// const auth = getAuth(app);

function App() {
  // const [user] = useAuthState(auth);s

  return (
    <div className="App">
      <header className="App-header">
        {/* <section>{user ? <ChatBox /> : "sign ins"}</section> */}
        {/* <SignIn /> */}
        Sally
      </header>
    </div>
  );
}

export default App;
