import React, { Component } from 'react';
import {
  Form,
  Grid,
  Row,
  FormControl,
  FormGroup,
  Col,
  ControlLabel,
  Checkbox,
  Button
} from 'react-bootstrap';
class Login extends Component {
  render() {
    return (
      <Grid>
        <Row className='show-grid'>
          <Col xs={6} md={6} style={{ background: '#6eabc7' }}>
            <Form horizontal>
              <ControlLabel>login form</ControlLabel>
              <FormGroup controlId='formHorizontalEmail'>
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>

                <Col sm={10}>
                  <FormControl type='email' placeholder='Email' />
                </Col>
              </FormGroup>

              <FormGroup controlId='formHorizontalPassword'>
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl type='password' placeholder='Password' />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type='submit'>Sign in</Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Login;
