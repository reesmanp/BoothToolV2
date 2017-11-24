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
  </div>
);

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default Login;
