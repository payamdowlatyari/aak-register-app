import React, { useEffect } from "react";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route, useLocation } from "react-router-dom";
import Profile from "./components/Profile";
import { clearMessage } from "./actions/message";
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useDispatch();
  let location = useLocation();

  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage());
    }
  }, [dispatch, location]);

  return (
    <main>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Login />}
          />
        </Routes>
      </div>
    </main>
  );
}

export default App;
