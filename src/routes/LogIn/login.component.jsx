import { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import "./login.style.scss";

import { UserContext } from "../../contexts/user.context";

import FieldWithTitle from "../../components/FieldWithTitle/fieldwithtitle.component";
import { logIn } from "../../utils/ApiCalls";

const LogIn = () => {
  const { setLogedUser } = useContext(UserContext);
  const navigate = useNavigate()

  const logInHandler = async () =>{
    console.log("Log in");
    var user = {
      username: document.querySelector("input[name='username']").value,
      password: document.querySelector("input[name='password']").value,
    };

    const response = await logIn(user);
    console.log(response);
    if (response.error) {
      alert(response.error);
      return;
    } 

    setLogedUser(response);

    console.log(response);
    if (response) {
      if (response.permission == 0) {
        navigate("/employe");
      } else if (response.permission == 1){
        navigate("/manager");
      }
    }
  }

  return (
    <div className="login">
        {/* <div className="prezentare"> */}
            <div className="login-container">
                <h1>Log In</h1>
                <div className="form">
                    <FieldWithTitle type="text" name="username" title="Username" styleClass="fields"/>
                    <FieldWithTitle type="password" name="password" title="Password" styleClass="fields"/>
                    <button onClick={()=>logInHandler()}>Log In</button>
                    
                </div>
                <h3 className="switch-btn" onClick={() => {navigate("/register")}}>Register</h3>
            </div>
        {/* </div> */}
      
    </div>
  );
};

export default LogIn;