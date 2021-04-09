import React from 'react';

import Register from '../components/Register';
import Login from '../components/Login';
import Challenges from './AllChallenges'

function LandingPage() {

    return (
        <div className='LandingPage'>
            <div className='imgBanner'>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
            </div>
            <h2>Are you ready for a Challenge?</h2>
            <Register />
            <Login />
            <h2>Need Inspiration?</h2>
            <h3>Check out what out members are doing!</h3>
            <button>Challenges</button>
            <Challenges />
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