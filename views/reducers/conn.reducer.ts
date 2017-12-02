import { Map, List } from 'immutable';
import { connActions as Actions } from '../actions';

interface Action {
  type: string;
  key: string;
  value: any;
}

const initialState = Map({
  connections: Map()
});

export const conn = (state = initialState, action: Action) => {
  switch (action.type) {
    case Actions.NEW_CONN:
      return state.setIn(['connection', action.key], action.value);
    default:
      return state;
  }
};
