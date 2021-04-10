import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../components/Modal';
import Register from '../components/Register';
import Login from '../components/Login';
import Challenges from './AllChallenges'

function LandingPage() {
    const [click, setClick] = useState(false)
    const modal1 = useRef(null);
    const modal2 = useRef(null);

    const handleClick = () => {
        setClick(!click)
    }

    console.log(click)

    return (
        <div className='LandingPage'>
            <div className='imgBanner'>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
            </div>

            <h2>Are you up for a Challenge?</h2>

            <button onClick={ () => modal1.current.open()}>Sign Up</button>
            <button onClick={() => modal2.current.open()}>Login</button>

            <Modal ref={modal1}>
                <Register />
            </Modal>

            <Modal ref={modal2}>
                <Login />
            </Modal>

            <h2>Need Inspiration?</h2>
            <h3>Check out what our members are doing!</h3>
            <Link to='/challenges'>Challenges</Link>

            <div className='imgBanner'>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
            </div>
        </div>
    );
  };

  export default LandingPage;