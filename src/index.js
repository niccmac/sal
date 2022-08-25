import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { GoogleAuthContext } from "./providers/GoogleAuthProvider";
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        colours: {
          brown: ["#A52A2A"]
        }
      }}
    >
      <GoogleAuthContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GoogleAuthContext>
    </MantineProvider>
  </React.StrictMode>
);
reportWebVitals();
