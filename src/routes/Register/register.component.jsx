import { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import "./register.style.scss";

import { UserContext } from "../../contexts/user.context";

import FieldWithTitle from "../../components/FieldWithTitle/fieldwithtitle.component";
import { register } from "../../utils/ApiCalls";

const Register = () => {
  const { setLogedUser } = useContext(UserContext);
  const navigate = useNavigate()

  const registerHandler = async () =>{
    console.log("Register");
    const username = document.querySelector("input[name='username']").value;
    const password = document.querySelector("input[name='password']").value;
    const repeatPassword = document.querySelector("input[name='repeatPassword']").value;


    if(!username){
      alert("Please enter a username");
      return;
    }

    if(!password){
      alert("Please enter a password");
      return;
    }

    if(!repeatPassword){
      alert("Please repeat the password");
      return;
    }

    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }
    var user = {
      username: username,
      password: password,
    };

    const response = await register(user);
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
    <div className="register">
        {/* <div className="prezentare"> */}
            <div className="register-container">
                <h1>Register</h1>
                <div className="form">
                    <FieldWithTitle type="text" name="username" title="Username" styleClass="fields"/>
                    <FieldWithTitle type="password" name="password" title="Password" styleClass="fields"/>
                    <FieldWithTitle type="password" name="repeatPassword" title="Repeat Password" styleClass="fields"/>
                    <button onClick={()=>registerHandler()}>Register</button>
                    
                </div>
                <h3 className="switch-btn" onClick={() => {navigate("/login")}}>LogIn</h3>
            </div>
        {/* </div> */}
      
    </div>
  );
};

export default Register;