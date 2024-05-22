import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './landpage.style.scss';

import imgPeople from '../../images/people.png';

const Landpage = () => {
  return (
    <div className='landpage'>
        <div className='prezentare'>
            <div className='left'>
                <h1>Be more productive! <br/> Manage your team faster.</h1>
                {/* <Link to="/" className="link"> */}
                    <button>Start Now</button>
                {/* </Link> */}
            </div>
            <div className='right'>
                <img src={imgPeople} alt="" />
            </div>
        </div>
    </div>
  );
};

export default Landpage;