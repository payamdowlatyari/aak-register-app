import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/auth";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Fieldset } from "primereact/fieldset";
import { Dropdown } from "primereact/dropdown";
import { Link, Navigate } from "react-router-dom";

export default function Register() {
  const userTypes = [
    "researcher",
    "investor",
    "institution_staff",
    "service_provider",
  ];

  const [formData, setFormData] = useState({});
  const [userType, setUserType] = useState(userTypes[0]);
  const [successful, setSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);

  const { message } = useSelector((state) => state.message);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.value);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessful(false);
    setLoading(true);
    dispatch(register(formData))
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
    setLoading(false);
  };

  if (isLoggedIn) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="container m-auto">
      <Fieldset legend="Sign Up">
        <form onSubmit={handleSubmit}>
          {!successful && (
            <div>
              <div className="form-select">
                <label htmlFor="user_type">User Type</label>
                <Dropdown
                  value={userType}
                  onChange={handleUserTypeChange}
                  options={userTypes}
                  id="user_type"
                />
              </div>
              <div>
                <label htmlFor="first_name">First Name</label>
                <InputText
                  onChange={handleChange}
                  type="text"
                  id="first_name"
                />
              </div>
              <div>
                <label htmlFor="last_name">Last Name</label>
                <InputText onChange={handleChange} type="text" id="last_name" />
              </div>
              <div>
                <label htmlFor="username">Username</label>
                <InputText onChange={handleChange} type="text" id="username" />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <InputText onChange={handleChange} type="email" id="email" />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <InputText
                  onChange={handleChange}
                  type="password"
                  id="password"
                />
              </div>

              <div>
                <Button label="Sign Up" disabled={loading} raised />
              </div>
              <div>
                <span>Already registered? </span>
                <Link to={"/login"}>Login</Link>
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
      </Fieldset>
    </div>
  );
}
