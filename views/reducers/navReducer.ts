import { Map } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

interface Action {
  type: string;
  payload: string
}

const initialState = Map({
  locationBeforeTransitions: null
});

export const nav = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.set('locationBeforeTransitions', action.payload);
    default:
      return state;
  }
};
