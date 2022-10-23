import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

function Header2() {


    return (
        <div>
            <div className="header">
                <div className="header__left">
                    <Link to="/">
                        <img
                            className="header__logo"
                            src="https://s3.amazonaws.com/fjds/gig_company/original/20/freelancer-logo.png?1587072521"
                            alt="logo"
                        />
                    </Link>
                    <h4>How It Works</h4>
                    <h4>Browse Jobs</h4>
                </div>

                <div className="header__right">
                    <h4><Link to="/login">Log In</Link></h4>
                    <h4><Link to="/signup">Sign Up </Link></h4>
                    <button> Post a Project</button>
                </div>

            </div >
           
            <div className="header" style={{backgroundColor : '#325ff9'}}>

                <div className='header__left' style={{color : 'white', padding : '2% 10%'}}>
                    <h1> Top Jobs </h1>
                </div>
               
                <div className="header__right">

                <button> I want to Work</button>
                <button> I want to Hire</button>
                </div>
            </div>
        </div>
    )
}

export default Header2
