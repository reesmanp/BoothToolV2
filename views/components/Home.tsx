import * as React from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';

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
  () => history.location.pathname === '/' && history.push(route)
);

const renderHome = (props: HomeProps) => (
  <div className='container is-fluid'>
    <label className='label is-large has-text-centered'>Welcome!</label>
  </div>
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
    ? renderHome(props)
    : renderLoginOrSignUpRedirect(props.history)
);

const Home = connect(mapStateToProps, mapDispatchToState)(HomeComponent);

export default Home;
