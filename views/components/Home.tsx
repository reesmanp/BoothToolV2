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

const renderLoginRedirect = history => {
  history.location.pathname === '/' && history.push('/login');
  return null;
};

const HomeComponent = (props: HomeProps) => (
  props.isAuthorized
    ? <h2>Welcome!</h2>
    : renderLoginRedirect(props.history)
);

const Home = connect(mapStateToProps, mapDispatchToState)(HomeComponent);

export default Home;
