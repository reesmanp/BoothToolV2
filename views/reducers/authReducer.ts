import { Map } from 'immutable';
import { authActions as Actions } from '../actions';

interface Action {
  type: string;
  token: string;
}

const initialState = Map({
  auth: Map({
    token: null
  })
});

export const auth = (state = initialState.get('auth'), action: Action) => {
  switch (action.type) {
    case Actions.LOGIN:
      return state.set('token', token);
    default:
      return state;
  }
};
