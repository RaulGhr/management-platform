import { Fragment } from "react";
import { Outlet, Link } from 'react-router-dom';

import "./navigation.style.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="link">
          <h1>Managero</h1>    
        </Link>
        <div className="right">
          <Link to="/login" className="link">
            <h2>Log in</h2>
          </Link>
          <Link to="/register" className="link">
            <h2>Register</h2>
          </Link>
        </div>
        {/* <Link to="/" className="link">
          <h1>DressUp</h1>
        </Link> */}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
