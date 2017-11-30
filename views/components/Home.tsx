import * as React from 'react';
import { connect } from 'react-redux';
import { authActions as Actions } from '../actions';

interface HomeProps {
  history: any;
  isAuthorized: boolean;
}

const mapStateToProps = state => ({
  isAuthorized: !!state.getIn(['auth', 'token'])
});

const mapDispatchToState = dispatch => ({
});

const onClick = (route: string, history: any) => (
  event => history.location.pathname === '/' && history.push(route)
);

const renderLoginOrSignUpRedirect = history => (
  <div className='container is-fluid'>
    <div className='field is-grouped columns'>
      <div className='control column'>
        <button className='button is-success' onClick={onClick('/login', history)}>Sign In</button>
      </div>
      <div className='control column'>
        <button className='button is-success' onClick={onClick('/signup', history)}>Sign Up</button>
      </div>
    </div>
  </div>
);

const HomeComponent = (props: HomeProps) => (
  props.isAuthorized
    ? <h2>Welcome!</h2>
    : renderLoginOrSignUpRedirect(props.history)
);

const Home = connect(mapStateToProps, mapDispatchToState)(HomeComponent);

export default Home;
