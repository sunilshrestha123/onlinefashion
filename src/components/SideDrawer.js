import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem } from '@material-ui/core';
import App from '../App';
import Test from '../components/Test';
import Home from './Home';
import { Link } from 'react-router-dom';
import Register from './Register';
const SideDrawer = props => {
  return (
    <div>
      <Drawer
        anchor='right'
        open={props.open}
        onClose={() => props.onClose(false)}
      >
        <List>
          <ListItem button onClick={() => console.log('feture')}>
            <Link to='/home' target='home'>
              Home
            </Link>
          </ListItem>
          <ListItem button onClick={() => console.log('feture')}>
            ABOUT Us
          </ListItem>
          <ListItem button onClick={() => console.log('feture')}>
            Service
          </ListItem>
          <ListItem button onClick={() => console.log('feture')}>
            <Link to='/register' targer='register'>
              Register
            </Link>
          </ListItem>
          <ListItem button onClick={() => console.log('feture')}>
            <Link to='/signup' target='signup'>
              sign Up
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
