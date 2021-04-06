import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faEdit, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

import Navbar from './components/Navbar';
import PrivateRoute from './utils/PrivateRoute'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage';

import './App.css'

library.add(faEnvelope, faKey, faEdit, faCheck);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={LandingPage}/>
        <PrivateRoute path='/dashboard' component={Dashboard} />
        
      </div>
    </Router>
  );
}

export default App;
