import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { Panel } from "primereact/panel";
import { logout } from "../actions/auth";

export default function Home() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="container">
      <Panel header="Home Page">
        <div>
          <h2>Welcome {currentUser.first_name}</h2>
        </div>
        {currentUser && (
          <div className="home-links">
            <div>
              <Link to={"/Profile"}>Profile</Link>
            </div>
            <div>
              <a href="/login" onClick={logOut}>
                LogOut
              </a>
            </div>
          </div>
        )}
      </Panel>
    </div>
  );
}
