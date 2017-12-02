import { Map } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { navActions as Actions } from '../actions';

interface Action {
  type: string;
  payload: any
}

const initialState = Map({
  locationBeforeTransitions: null,
  navbarBurger: false
});

export const nav = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.set('locationBeforeTransitions', action.payload);
    case Actions.TOGGLE_BURGER:
      return state.set('navbarBurger', !state.get('navbarBurger'));
    default:
      return state;
  }
};
