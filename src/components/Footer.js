import React from 'react';

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
              <u>Services</u>
            </h2>
            <p>buy in ilam fashion collection</p>
            <p>sold in ilam fashion</p>
            <p>Contact ilam fashion</p>
            <p>about ilam fashion collection</p>
          </Col>
          <Col xs={6} md={4}>
            <h2>
              <u>Services</u>
            </h2>
            <p>buy in ilam fashion collection</p>
            <p>sold in ilam fashion</p>
            <p>Contact ilam fashion</p>
            <p>about ilam fashion collection</p>
          </Col>

          <Col xs={6} md={4}>
            <h2>
              <u>Services</u>
            </h2>
            <p>buy in ilam fashion collection</p>
            <p>sold in ilam fashion</p>
            <p>Contact ilam fashion</p>
            <p>about ilam fashion collection</p>
          </Col>
        </div>
        <div class='site-info'>
          <div class='container text-center'>
            <p>
              Copyright © 2018&nbsp;{' '}
              <a href='https://www.facebook.com/ilam027'>
                Ilam Fashion Collection
              </a>{' '}
              | All Rights Reserved.
            </p>

            <p>
              Design &amp; Developed By:{' '}
              <a href='http://www.ilafashioncollection'>Techilam Pvt. Ltd.</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
