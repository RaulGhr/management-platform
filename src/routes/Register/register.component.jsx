import "./register.style.scss";

import FieldWithTitle from "../../components/FieldWithTitle/fieldwithtitle.component";

const Register = () => {
  return (
    <div className="register">
        {/* <div className="prezentare"> */}
            <div className="register-container">
                <h1>Register</h1>
                <form>
                    <FieldWithTitle type="text" name="username" title="Username" styleClass="fields"/>
                    <FieldWithTitle type="password" name="password" title="Password" styleClass="fields"/>
                    <FieldWithTitle type="password" name="repeatPassword" title="Repeat Password" styleClass="fields"/>
                    <button>Register</button>
                    
                </form>
                <h3 className="switch-btn">LogIn</h3>
            </div>
        {/* </div> */}
      
    </div>
  );
};

export default Register;