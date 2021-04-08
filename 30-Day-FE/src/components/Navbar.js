import React from 'react';
import '../App.css'
import { GuestToolbar } from './Toolbar';

const Navbar = () => {

    return (
        <div className='navBar'>
            <div className='navTitle'>
                <h1>30-Day Challenge</h1>
            </div>
            <div>
                <GuestToolbar />
            </div>
            
            <div className='navButtons'>
                <button>Sign-In</button>
                <button>Log-Out</button>
            </div>
        </div>
    )
};

export default Navbar;