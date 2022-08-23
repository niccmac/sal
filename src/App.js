import logo from "./logo.svg";
import "./App.css";
import ChatMessage from "./components/chat";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Sally
        <ChatMessage />
      </header>
    </div>
  );
}

export default App;
