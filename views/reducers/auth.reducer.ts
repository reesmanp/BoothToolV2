import { Map } from 'immutable';
import { authActions as Actions } from '../actions';

interface Action {
  type: string;
  value: string;
}

const initialState = Map({
  token: null,
  username: null,
  password: null
});

export const auth = (state = initialState, action: Action) => {
  switch (action.type) {
    case Actions.LOGIN:
      return state.set('token', action.value);
    case Actions.LOGOUT:
      return state.set('token', null);
    case Actions.USERNAME:
      return state.set('username', action.value);
    case Actions.PASSWORD:
      return state.set('password', action.value);
    default:
      return state;
  }
};
