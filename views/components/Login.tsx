import * as React from 'react';
import { connect } from 'react-redux';

interface LoginProps {
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

const LoginComponent = (props: LoginProps) => (
  <div className='container'>
    <div className='field'>
      <label className='label'>Username</label>
      <div className='control'>
        <input className='input' type='text' placeholder='Username' />
      </div>
    </div>
    <div className='field'>
      <label className='label'>Password</label>
      <div className='control has-icons-left'>
        <input className='input' type='password' placeholder='Password' />
        <span className='icon is-small is-left'>
          <i className='fa fa-lock' />
        </span>
      </div>
    </div>
  </div>
);

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default Login;
