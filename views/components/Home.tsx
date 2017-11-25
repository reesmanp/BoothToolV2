import * as React from 'react';
import { connect } from 'react-redux';

interface HomeProps {
}

const mapStateToProps = state => ({
});

const mapDispatchToState = dispatch => ({
});

const HomeComponent = (props: HomeProps) => (
  <h2>Welcome!</h2>
);

const Home = connect(mapStateToProps, mapDispatchToState)(HomeComponent);

export default Home;
