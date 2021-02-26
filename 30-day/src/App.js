import React, { useState } from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faEdit, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

import Navbar from './components/Navbar';
import { HC_ChallengeCard30, HC_ChallengeCard60 } from './components/HC_ChallengeCard'
import WelcomeBack from './components/WelcomeBack';

import './App.css'

library.add(faEnvelope, faKey, faEdit, faCheck);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <h1>Your Daily Challenges </h1>

        <WelcomeBack />

        <div className='allCards'>
          <HC_ChallengeCard30 />
          <HC_ChallengeCard60 />
        </div>
      </div>
    </Router>
    
  );
}

export default App;
