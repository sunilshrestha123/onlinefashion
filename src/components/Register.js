import React from 'react';

import '../assets/css/register.css';
import { registerUser } from '../service/userapi';
class Register extends React.Component {
  onSubmit = async () => {
    console.log('here...');
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const isPasswordConfirmed = password === confirmPassword ? true : false;
    if (isPasswordConfirmed) {
      const payload = {
        email: email,
        username: firstName + '' + lastName,
        password: password
      };

      //Api call
      const result = await registerUser(payload);
      if ((result.status = '201')) {
        alert('Successfully registered');
      }
    } else {
      alert('youre password/confirm password doesnt match');
    }
  };

  render() {
    return (
      <div className='register_body'>
        <div>
          <label>first name</label>
          <input
            type='text'
            id='firstName'
            placeholder='eneter the first name'
          />
        </div>
        <div>
          <label>last name</label>
          <input
            type='text'
            id='lastName'
            placeholder='eneter the last  name'
          />
        </div>
        <div>
          <label>email</label>
          <input type='text' id='email' placeholder='eneter the email ' />
        </div>
        <div>
          <label>password </label>
          <input
            type='password'
            id='password'
            placeholder='eneter the password'
          />
        </div>
        <div>
          <label>re-password</label>
          <input
            type='password'
            id='confirmPassword'
            placeholder='eneter the password'
          />
        </div>
        <button onClick={this.onSubmit}>submit</button>
      </div>
    );
  }
}
export default Register;
