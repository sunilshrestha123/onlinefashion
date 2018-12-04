import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Register from './components/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '../src/assets/css/body.css';
// import Home from './components/Home';

// import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className='nav_bar'>
            <Navbar />
            <div className='body'>
              <Route render={() => <App app='homepage' />} exact path='/home' />
              <Route
                render={() => <Register app='register' />}
                exact
                path='/register'
              />
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
