import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import reducers from '../reducers';
import Login from './Login';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path='/' component={}/>
      <Route path='/login' component={Login}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('reactContainer')
);
