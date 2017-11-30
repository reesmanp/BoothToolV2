import * as React from 'react';
import { connect } from 'react-redux';

interface BannerProps {
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

const BannerComponent = props => (
  <nav className='navbar is-success' role='navigation' aria-label='main navigation'>
  </nav>
);

const Banner = connect(mapStateToProps, mapDispatchToProps)(BannerComponent);

export default Banner;
