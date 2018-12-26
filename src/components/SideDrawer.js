import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem } from '@material-ui/core';
import { Button } from 'react-bootstrap';
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
          <ListItem button onClick={() => props.onClose(false)}>
            <Link to='/home'>Home</Link>
          </ListItem>
          <ListItem button onClick={() => props.onClose(false)}>
            <Link to='/aboutus'>ABOUT Us</Link>
          </ListItem>
          <ListItem button onClick={() => props.onClose(false)}>
            Service
          </ListItem>
          <ListItem button onClick={() => props.onClose(false)}>
            <Link to='/register'>Register</Link>
          </ListItem>
          <ListItem button onClick={() => props.onClose(false)}>
            <Link to='/login'>Log In</Link>
          </ListItem>
          <ListItem button onClick={() => console.log('feture')}>
            <Link to='/product'>Add Product</Link>
          </ListItem>
          <ListItem button onClick={() => console.log('feture')}>
            <Link to='/category'>Add Category</Link>
          </ListItem>
          <ListItem button onClick={() => console.log('feture')}>
            <Link to='/category'>
              <Button bsStyle='primary'>Add Product</Button>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
