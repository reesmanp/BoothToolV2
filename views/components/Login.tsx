import * as React from 'react';
import { connect } from 'react-redux';
import { authActions as Actions } from '../actions';

interface LoginProps {
  history: any;
  isAuthorized: boolean;
  authorizationSuccessful: (token: string) => undefined;
}

const mapStateToProps = state => ({
  isAuthorized: !!state.getIn(['auth', 'token'])
});

const mapDispatchToProps = dispatch => ({
  authorizationSuccessful: (token: string) => dispatch(Actions.login(token))
});

const credentials = {
  username: '',
  password: ''
};

// Accepts a string and
// returns a function that takes in an event and
// applies the value to the correlating key in credentials
const onChange = (key: string) => (
  event => credentials[key] = event.target.value || ''
);

// Validates username and password in credentials
// if successful, generates token and
// dispatches authorization and changes route to '/'
const onAuthorize = (props: LoginProps) => (
  event => {
    event.preventDefault();
    // TODO: add database lookup here
    const token = '1234567890';
    if (credentials.username && credentials.password) {
      props.authorizationSuccessful(token);
      //props.history.push('/');
    }
  }
);

const preLogin = (props: LoginProps) => (
  <div className='container is-fluid'>
    <div className='field'>
      <label className='label'>Username</label>
      <div className='control'>
        <input className='input' type='text' placeholder='Username' onChange={onChange('username')}/>
      </div>
    </div>
    <div className='field'>
      <label className='label'>Password</label>
      <div className='control has-icons-left'>
        <input className='input' type='password' placeholder='Password' onChange={onChange('password')}/>
        <span className='icon is-small is-left'>
          <i className='fa fa-lock' />
        </span>
      </div>
    </div>
    <div className='field'>
      <div className='control'>
        <button className='button is-link' onClick={onAuthorize(props)}>Login</button>
      </div>
    </div>
  </div>
);

const postLogin = (props: LoginProps) => (
  <div className='container is-fluid'>
    <h2>You are logged in!</h2>
    <button className='button is-text' onClick={() => props.history.push('/')}>
      Return Home
    </button>
  </div>
);

const LoginComponent = (props: LoginProps) => (
  props.isAuthorized
    ? postLogin(props)
    : preLogin(props)
);

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default Login;
