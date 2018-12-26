import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '../src/assets/css/body.css';
import '../src/assets/css/menu.css';
import '../src/assets/css/slides.css';
import User from '../src/User';
import Aboutus from './components/Aboutus';
import Home from './components/Home';
import Login from './components/Login';
import Product from './components/product/Addproduct';
import ContainedButtons from './components/product/Addproduct';
import ShoppingItemCollection from './components/slider/ShppingItemCollection';
import CustomizedTable from './components/users/DisplayUser';

import { register } from './service/userapi';
import Category from './components/product/Category';
import Displaycategory from './components/product/Displaycategory';
// import Home from './components/Home';

// import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  // async componentDidMount() {
  //   const result = await register();
  //   this.setState({ users: result.data });
  // }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div className='nav_bar'>
              <Navbar />
              <div className='body'>
                <Route
                  render={() => <Home App='homepage' />}
                  exact
                  path='/home'
                />
                <Route
                  render={() => <Register App='register' />}
                  exact
                  path='/register'
                />
                <Route
                  render={() => <Aboutus App='aboutus' />}
                  exact
                  path='/aboutus'
                />
                <Route
                  render={() => <Login App='login' />}
                  exact
                  path='/login'
                />
                <Route
                  render={() => <Product App='product' />}
                  exact
                  path='/product'
                />
                <Route
                  render={() => <Category App='category' />}
                  exact
                  path='/category'
                />
              </div>
            </div>
            <Displaycategory />
            <ShoppingItemCollection />
            <ContainedButtons />
            <CustomizedTable />
            <User />
            {/* {this.state.users.map(items => {
              return (
                <div>
                  <h1>{items.email}</h1>
                  <h1>{items.first_name}</h1>
                  <h1>{items.last_name}</h1>
                  <h1>{items.password}</h1>
                </div>
              );
            })} */}
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
