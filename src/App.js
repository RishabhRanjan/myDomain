import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  const DefaultApp = () => {
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
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={DefaultApp}></Route>
          <Route path="/home" Component={Home}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
