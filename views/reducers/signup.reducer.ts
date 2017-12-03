import { Map } from 'immutable';
import { signUpActions as Actions } from '../actions';

interface Action {
  type: string;
  value: string;
}

const initialState = Map({
  fname: null,
  lname: null,
  uname: null,
  pname: null,
  email: null,
  tel: null
});

export const signUp = (state = initialState, action: Action) => {
  switch (action.type) {
    case Actions.FNAME:
      return state.set('fname', action.value);
    case Actions.LNAME:
      return state.set('lname', action.value);
    case Actions.UNAME:
      return state.set('uname', action.value);
    case Actions.PNAME:
      return state.set('pname', action.value);
    case Actions.EMAIL:
      return state.set('email', action.value);
    case Actions.TEL:
      return state.set('tel', action.value);
    case Actions.RESET:
      return initialState;
    default:
      return state;
  }
};
