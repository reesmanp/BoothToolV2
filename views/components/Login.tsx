import * as React from 'react';
import { connect } from 'react-redux';
import { authActions as Actions } from '../actions';

interface LoginProps {
  history: any;
  isAuthorized: boolean;
  token: string;
  username: string;
  password: string;
  authorizationSuccessful: (token: string) => undefined;
  setUsername: (name: string) => undefined;
  setPassword: (phrase: string) => undefined;
}

const mapStateToProps = state => ({
  isAuthorized: !!state.getIn(['auth', 'token']),
  token: state.getIn(['auth', 'token']),
  username: state.getIn(['auth', 'username']),
  password: state.getIn(['auth', 'password'])
});

const mapDispatchToProps = dispatch => ({
  authorizationSuccessful: (token: string) => dispatch(Actions.login(token)),
  setUsername: (name: string) => dispatch(Actions.username(name)),
  setPassword: (phrase: string) => dispatch(Actions.password(phrase))
});

// Accepts a dispatch function and
// returns a function that takes in an event and
// dispatches the event value
const onChange = (dispatch: (_: string) => undefined) => (
  event => dispatch(event.target.value)
);

// Validates username and password in store
// if successful, generates token and
// dispatches authorization and changes route to '/'
const onAuthorize = (props: LoginProps) => {
  // TODO: add database lookup here
  const token = '1234567890';
  if (props.username && props.password) {
    props.authorizationSuccessful(token);
    //props.history.push('/');
  }
};

const preLogin = (props: LoginProps) => (
  <div className='container is-fluid'>
    <div className='field'>
      <label className='label'>Username</label>
      <div className='control'>
        <input className='input' type='text' placeholder='Username' onChange={onChange(props.setUsername)}/>
      </div>
    </div>
    <div className='field'>
      <label className='label'>Password</label>
      <div className='control has-icons-left'>
        <input className='input' type='password' placeholder='Password' onChange={onChange(props.setPassword)}/>
        <span className='icon is-small is-left'>
          <i className='fa fa-lock' />
        </span>
      </div>
    </div>
    <div className='field'>
      <div className='control'>
        <button className='button is-link' onClick={() => onAuthorize(props)}>Login</button>
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
