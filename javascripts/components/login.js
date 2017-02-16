import React, { Component } from 'react';

class Login extends Component {
  constructor (props) {
    super(props);

    this.state = {
      username: null
    };
  }

  render () {
    return (
      <div className='loginDiv'>
        <h1>Login</h1>
        <span>Username: <input type='text' name='username' autoFocus='true' placeholder='Username'/></span>
      </div>
    );
  }
}

export default Login;
