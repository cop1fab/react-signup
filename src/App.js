import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './views/signUpForm';
import SignInForm from './views/signInForm';
import logo from './images/world.svg';
import backImage from "./images/jon-tyson-762619-unsplash.jpg";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/users/">
        <div className="App">
          <div className="App__Aside">
          <div className="App-back">
            <img src={backImage} alt="backg"/>
          </div>
            <div className="App__Logo">
              <img src= {logo} className="logo" width="80" height="100" alt=""/>
            </div>
          </div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/sign-up" component={SignUpForm}>
              </Route>
              <Route path="/login" component={SignInForm}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
