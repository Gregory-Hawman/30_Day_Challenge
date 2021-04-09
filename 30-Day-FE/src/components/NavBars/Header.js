import React from 'react';
import '../../App.css'
import { GuestToolbar } from './Toolbar';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className='navBar'>
            <div className='navTitle'>
                <Link to='/'><h1>30-Day Challenge</h1></Link>
            </div>
                <GuestToolbar />
            <div className='navButtons'>
                <button>Sign-In</button>
                <button>Log-Out</button>
            </div>
        </div>
    )
};

export default Header;