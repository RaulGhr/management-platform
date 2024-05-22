import "./login.style.scss";

import FieldWithTitle from "../../components/FieldWithTitle/fieldwithtitle.component";

const LogIn = () => {
  return (
    <div className="login">
        {/* <div className="prezentare"> */}
            <div className="login-container">
                <h1>Log In</h1>
                <form>
                    <FieldWithTitle type="text" name="username" title="Username" styleClass="fields"/>
                    <FieldWithTitle type="password" name="password" title="Password" styleClass="fields"/>
                    <button>Log In</button>
                    
                </form>
                <h3 className="switch-btn">Register</h3>
            </div>
        {/* </div> */}
      
    </div>
  );
};

export default LogIn;