import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../actions/auth";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";

export default function Login() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const { message } = useSelector((state) => state.message);
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    dispatch(login(formData))
      .then(() => {
        navigate("/profile");
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/profile" replace={true} />;
  }

  return (
    <div className="container m-auto">
      <Panel header="Login">
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="username">Username</label>
              <InputText
                onChange={handleChange}
                className="w-15rem"
                type="text"
                id="username"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <InputText
                onChange={handleChange}
                className="w-15rem"
                type="password"
                id="password"
              />
            </div>
            <div>
              <Button label="Login" disabled={loading} />
            </div>
          </div>

          {message && (
            <div className={"alert-danger"} role="alert">
              {message}
            </div>
          )}
        </form>
      </Panel>
    </div>
  );
}
