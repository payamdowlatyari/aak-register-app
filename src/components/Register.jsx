import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/auth";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";

export default function Register() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessful(false);
    dispatch(register(formData))
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  return (
    <div className="container m-auto">
      <Panel header="Sign Up">
        <form onSubmit={handleSubmit}>
          {!successful && (
            <div>
              <div>
                <label htmlFor="user_type">User Type</label>
                <InputText
                  onChange={handleChange}
                  className="w-15rem"
                  type="text"
                  id="user_type"
                />
              </div>
              <div>
                <label htmlFor="first_name">First Name</label>
                <InputText
                  onChange={handleChange}
                  className="w-15rem"
                  type="text"
                  id="first_name"
                />
              </div>
              <div>
                <label htmlFor="last_name">Last Name</label>
                <InputText
                  onChange={handleChange}
                  className="w-15rem"
                  type="text"
                  id="last_name"
                />
              </div>
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
                <label htmlFor="email">Email</label>
                <InputText
                  onChange={handleChange}
                  className="w-15rem"
                  type="email"
                  id="email"
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
                <Button label="Sign Up" />
              </div>
            </div>
          )}

          {message && (
            <div
              className={successful ? "alert-success" : "alert-danger"}
              role="alert"
            >
              {message}
            </div>
          )}
        </form>
      </Panel>
    </div>
  );
}
