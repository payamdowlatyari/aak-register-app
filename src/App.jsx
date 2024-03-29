import React, { useEffect } from "react";
import Home from "./components/Home";
import { useDispatch } from "react-redux";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import Profile from "./components/Profile";
import { clearMessage } from "./actions/message";

function App() {
  const dispatch = useDispatch();
  let location = useLocation();

  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage());
    }
  }, [dispatch, location]);

  return (
    <main>
      <nav>
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Sign Up</Link>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
