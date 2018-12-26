import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';
import MenuItem from '../components/MenuItem';
// import Radium,{StyleRoot} from 'radium';

import Button from '@material-ui/core/Button';

class Navbar extends React.Component {
  //   const styles={

  //     '@media(min-width:500px)':{
  // width:'450px'

  //     }
  //   }
  // constructor(props){
  //   super(props);
  //   this.state={
  //     scrollingLock:false

  //   }
  // }
  state = {
    dawerOpen: false,
    headerShow: true
  };

  clickdata = () => {
    console.log('button has been clicked');
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true
      });
    } else {
      this.setState({
        headerShow: true
      });
    }
  };
  toggleDrawer = value => {
    this.setState({
      dawerOpen: value
    });
  };
  render() {
    return (
      <AppBar
        className='Navbar '
        position='fixed'
        style={{
          backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
          boxShadow: 'none',
          padding: '10px 0px',
          borderBottom: '2px solid #47a3ee'
        }}
      >
        <Toolbar>
          <div className='header_logo'>
            <div className='font_righteous header_logo_venue'>
              Online Fashion
            </div>
            <div className='header_logo_title'>ilam</div>
          </div>

          <MenuItem menuName='MEN' />
          <MenuItem menuName='WOMEN' />
          <MenuItem menuName='BABY & KIDS' />
          <MenuItem menuName='ElECTRONICS' />
          <MenuItem menuName='CHOCOLOATES' />
          <MenuItem menuName='CAKE'>These is the cake</MenuItem>

          <Button variant='contained' color='primary' onClick={this.clickdata}>
            Primary
          </Button>

          <IconButton
            aria-label='Menu'
            color='inherit'
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            open={this.state.dawerOpen}
            onClose={value => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
      // </StyleRoot>
    );
  }
}

export default Navbar;
