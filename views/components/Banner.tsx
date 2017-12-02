import * as React from 'react';
import { connect } from 'react-redux';
import { navActions as Actions} from '../actions';

interface BannerProps {
  history: any;
  isActive: boolean;
  toggleBurger: () => undefined;
}

const mapStateToProps = state => ({
  isActive: state.getIn(['nav', 'navbarBurger'])
});

const mapDispatchToProps = dispatch => ({
  toggleBurger: () => dispatch(Actions.toggleBurger())
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
      <div className={`navbar-burger burger ${props.isActive ? 'is-active' : ''}`} onClick={props.toggleBurger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div className='navbar-menu'>
      <div className='navbar-start'>
        <a className='navbar-item is-tab' onClick={anchorTagOnClick('/', props.history)}>Home</a>
      </div>
    </div>
  </nav>
);

const Banner = connect(mapStateToProps, mapDispatchToProps)(BannerComponent);

export default Banner;
