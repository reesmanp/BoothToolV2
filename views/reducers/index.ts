import { combineReducers } from 'redux-immutable';
import { auth } from './auth.reducer';
import { nav } from './nav.reducer';
import { signUp } from './signup.reducer';
import { conn } from './conn.reducer';

const reducers = combineReducers({
  auth,
  nav,
  signUp,
  conn
});

export default reducers;
