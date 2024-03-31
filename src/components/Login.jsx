import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../actions/auth";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Fieldset } from "primereact/fieldset";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const { message } = useSelector((state) => state.message);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    dispatch(login(formData));
    setLoading(false);
  };

  if (isLoggedIn) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="container m-auto">
      <Fieldset legend="Login">
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
              <Button label="Login" disabled={loading} raised />
            </div>
            <div>
              <span>Don't have an account? </span>
              <Link to={"/register"}>Register</Link>
            </div>
          </div>

          {message && (
            <div className={"alert-danger"} role="alert">
              {message}
            </div>
          )}
        </form>
      </Fieldset>
    </div>
  );
}
