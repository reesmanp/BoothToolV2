import { combineReducers } from 'redux-immutable';
import { auth } from './authReducer';
import { nav } from './navReducer';

const reducers = combineReducers({
  auth,
  nav
});

export default reducers;
