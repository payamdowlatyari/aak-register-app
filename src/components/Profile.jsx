import React from "react";
import { useSelector } from "react-redux";
import { Panel } from "primereact/panel";

export default function Profile() {
  const { user: currentUser } = useSelector((state) => state.auth);

  const getUserType = () => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    return profile.profile.user_type;
  };

  return (
    <div className="container">
      <Panel header="Profile">
        <div className="profile">
          <div>
            <div>First Name: </div>
            <div> {currentUser.first_name}</div>
          </div>
          <div>
            <div>Last Name: </div>
            <div>{currentUser.last_name}</div>
          </div>
          <div>
            <div>User ID: </div>
            <div>{currentUser.id}</div>
          </div>
          <div>
            <div>Username:</div>
            <div> {currentUser.username}</div>
          </div>
          <div>
            <div>Title:</div>
            <div> {getUserType()}</div>
          </div>
        </div>
      </Panel>
    </div>
  );
}
