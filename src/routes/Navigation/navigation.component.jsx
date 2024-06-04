import { Fragment, useContext } from "react";
import { Outlet, Link, useNavigate } from 'react-router-dom';

import { UserContext } from "../../contexts/user.context";

import "./navigation.style.scss";

import { logOut } from "../../utils/ApiCalls";

const Navigation = () => {

  const { logedUser, setLogedUser } = useContext(UserContext);
  // console.log(logedUser);
  const navigate = useNavigate()

  const logOutHandler = async () =>{
    const response = await logOut(logedUser);
    // console.log(response);
    if (response.error) {
      alert(response.error);
      return;
    } 
    setLogedUser({});
    navigate("/");
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="link">
          <h1>Managero</h1>    
        </Link>
        
        {logedUser.id?
          <div className="right">
            <h2>{logedUser.username}</h2>
            <h2 onClick={()=>logOutHandler()}>Log out</h2>
          </div>
          :<div className="right">
          <Link to="/login" className="link">
            <h2>Log in</h2>
          </Link>
          <Link to="/register" className="link">
            <h2>Register</h2>
          </Link>
          </div>
          }

      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
