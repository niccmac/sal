import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage";

function App() {
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
