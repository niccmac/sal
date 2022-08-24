import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { GoogleAuthContext } from "./providers/GoogleAuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleAuthContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleAuthContext>
  </React.StrictMode>
);
reportWebVitals();
