import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faEdit, faEnvelope, faKey, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import PrivateRoute from './utils/PrivateRoute';

import Header from './components/NavBars/Header';
import Footer from './components/NavBars/Footer';
import Challenges from './pages/AllChallenges';
import Members from './pages/Members';

import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';

import './App.css'

library.add(faEnvelope, faKey, faEdit, faCheck, faAngleDown);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path='/' component={LandingPage}/>
        <Route path='/challenges' component={Challenges}/>
        <Route path='/members' component={Members}/>
        <Route path='/dashboard' component={Dashboard} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
