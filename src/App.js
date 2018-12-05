import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '../src/assets/css/body.css';
import User from '../src/User';

// import Home from './components/Home';

// import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div className='nav_bar'>
              <Navbar />
              <div className='body'>
                <Route
                  render={() => <App app='homepage' />}
                  exact
                  path='/home'
                />
                <Route
                  render={() => <Register app='register' />}
                  exact
                  path='/register'
                />
              </div>
            </div>
            <User />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
