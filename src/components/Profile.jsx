import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Panel } from "primereact/panel";

export default function Profile() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <Panel header="Profile Page">
        <div>
          <p>First Name: {currentUser.first_name}</p>
          <p>Last Name: {currentUser.last_name}</p>
          <p>User ID: {currentUser.id}</p>
          <p>Username: {currentUser.username}</p>
        </div>
      </Panel>
    </div>
  );
}
