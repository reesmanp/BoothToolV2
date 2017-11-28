import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import reducers from '../reducers';
import Home from './Home';
import Login from './Login';

const history = createHistory();
const store = createStore(
  combineReducers({
    ...reducers,
    routerReducer
  }),
  applyMiddleware(routerMiddleware(history))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className='section'>
        <Route path='/' component={Home}/>
        <Route path='/login' component={Login}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('reactContainer')
);
