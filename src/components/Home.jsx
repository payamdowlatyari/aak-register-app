import React, { useState, useEffect } from "react";
import services from "../services/index";
import { Panel } from 'primereact/panel';

export default function Home(){
    const [content, setContent] = useState({});

    useEffect(() => {
        const profile = JSON.parse(localStorage.getItem("profile"));
        setContent(profile)

    }, []);
    return (
        <div className="container">
        <Panel header="Home Page">
         <div>
         <p>First Name: {content.first_name}</p>   
         <p>Last Name: {content.last_name}</p>   
         <p>User ID: {content.id}</p>   
         <p>Username: {content.username}</p>   
         </div>
         </Panel> 
         <div className="log-btn">
            <a href="/login" onClick={services.logout()}>
                LogOut
             </a>  
             </div> 
        </div>
    )
}