import * as React from 'react';
import { connect } from 'react-redux';

interface BannerProps {
  history: any
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

const anchorTagOnClick = (route: string, history: any) => (
  event => event.preventDefault() && history.push(route)
);

const BannerComponent = (props: BannerProps) => (
  <nav className='navbar is-success' role='navigation' aria-label='main navigation'>
    <div className='navbar-brand'>
      <div className='navbar-item'>
        BoothTool V2
      </div>
      <div className='navbar-burger burger'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div className='navbar-menu is-active'>
      <div className='navbar-start'>
        <a className='navbar-item is-tab' onClick={anchorTagOnClick('/', props.history)}>Home</a>
      </div>
    </div>
  </nav>
);

const Banner = connect(mapStateToProps, mapDispatchToProps)(BannerComponent);

export default Banner;
