import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/auth";

export default function Navbar() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <nav>
      <div>
        <Link to={"/"}>Home</Link>
      </div>

      <div>
        {isLoggedIn ? (
          <>
            <Link to={"/profile"}>Profile</Link>
            <Link to={"/login"} onClick={logOut}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}
