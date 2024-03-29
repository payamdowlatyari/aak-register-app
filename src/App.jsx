import React from "react";
import Home from './components/Home';
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route, Link } from "react-router-dom";
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';

function App() {
  return (
    <main>
      <nav>
        <div>
        <Link to={"/"}>
        Home
        </Link>
        </div>
        <div>
        <Link to={"/login"}>
          Login
        </Link>
        <Link to={"/register"}>
          Sign Up
        </Link>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

    </main>

  );
}

export default App;
