import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { login } from '../actions/auth';
import { Button } from 'primereact/button';                             
import { InputText } from 'primereact/inputtext';
import { Panel } from 'primereact/panel';

export default function Login(){

const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

    const [successful, setSuccessful] = useState(false);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();    
        
          setSuccessful(false);
        dispatch(login(formData))
          .then(() => {
          setSuccessful(true);
          navigate('/')  
        })
        .catch(() => {
          setSuccessful(false);
        });
      };

    return (
        <div className="container m-auto">
       <Panel header="Login">
        <form onSubmit={handleSubmit}>
          {!successful && (
            <div>
              <div>
                <label htmlFor="username">Username</label>
                <InputText 
                    onChange={handleChange}
                    className="w-15rem" 
                    type='text'
                    id='username'
                    />
              </div>  
              <div>
                <label htmlFor="password">Password</label>
                <InputText 
                    onChange={handleChange}
                    className="w-15rem" 
                    type='password'
                    id='password'
                    />
              </div>
              <div>
                <Button label="Login" />
              </div>
            </div>
          )}

          {message && (
            <div className={ successful ? "alert-success" : "alert-danger" } role="alert">
            {message}
            </div>
          )}
        </form>
        </Panel>  
    </div>
    )
}