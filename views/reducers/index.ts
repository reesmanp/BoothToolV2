import { combineReducers } from 'redux-immutable';
import { auth } from './authReducer';
import { nav } from './navReducer';
import { signUp } from './signUpReducer';

const reducers = combineReducers({
  auth,
  nav,
  signUp
});

export default reducers;
