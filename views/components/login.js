import React, { Component } from 'react';

class Login extends Component {
  constructor (props) {
    super(props);

    this.state = {
      username: null
    };
    this.authenticate = this.authenticate.bind(this);
    this.update = this.update.bind(this);
  }

  authenticate () {
    const {
      logIn
    } = this.props;

    this.state.username ? logIn() : null;
  }

  update (evt) {
    this.setState({
      username: evt.target.value
    });
  }

  render () {
    return (
      <div className='loginDiv'>
        <h1>Login</h1>
        <span>Username:
          <input type='text' name='username' autoFocus='true' placeholder='Username' onBlur={this.update}/>
        </span>
        <button type='button' onClick={this.authenticate}>Log In</button>
      </div>
    );
  }
}

export default Login;
