import { combineReducers } from 'redux-immutable';
import { auth } from './authReducer';

const reducers = combineReducers({
  auth
});

export default reducers;
