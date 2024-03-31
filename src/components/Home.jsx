import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Panel } from "primereact/panel";

export default function Home() {
  const { user: currentUser } = useSelector((state) => state.auth);

  return (
    <div className="container">
      <Panel header="Home">
        {currentUser ? (
          <div>
            <h2>Welcome {currentUser.first_name}!</h2>
          </div>
        ) : (
          <div>
            <h2>Welcome friend!</h2>
            <p>Please login or create account</p>
            <Link to={"/login"}>Login</Link>or
            <Link to={"/register"}>Register</Link>
          </div>
        )}
      </Panel>
    </div>
  );
}
