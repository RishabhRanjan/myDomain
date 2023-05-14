import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes, useLocation } from "react-router";
import { Link } from "react-router-dom";

function App() {
  console.log("app", useLocation());
  const DefaultApp = (props) => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link className="App-link" to="/home">
            Go Home
          </Link>
        </header>
      </div>
    );
  };
  return (
    <Routes>
      <Route path="/" Component={DefaultApp} />
      <Route path="/home" Component={Home} />
    </Routes>
  );
}

export default App;
