import React from 'react';
import Mapsmy from './Mapsmy';
import '../assets/css/footer.css';
import { Col } from 'react-bootstrap';
class Footer extends React.Component {
  // function welcome(props) {
  // return <h1>hello,{props.name}</h1>
  //      }

  render() {
    return (
      <div>
        <div className='footer-style'>
          <Col xs={6} md={4}>
            <h2>
              <u>About Us</u>
            </h2>
            <p>About Us</p>
            <p>Career</p>
            <p>Corporate sales</p>
            <p>Where to Buy</p>
          </Col>
          <Col xs={6} md={4}>
            <h2>
              <u>support</u>
            </h2>
            <p>contact</p>
            <p>return</p>
            <p>Warrenty</p>
            <p>help</p>
          </Col>

          <Col xs={12} md={6}>
            <div />
          </Col>
        </div>
        <div className='social-site'>
          <h3>socaisocial_sil side link</h3>
        </div>
        <div className='site-info'>
          <p>
            Copyright © 2018&nbsp;{' '}
            <a href='https://www.facebook.com/ilam027'>
              Ilam Fashion Collection
            </a>{' '}
            | All Rights Reserved.
          </p>
        </div>
      </div>
    );
  }
}
export default Footer;
