import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';
import reducers from '../reducers';
import Home from './Home';
import Login from './Login';

import '../sass/index.scss';

const history = createHistory();
const store = createStore(
  reducers,
  applyMiddleware(routerMiddleware(history))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className='section'>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('reactContainer')
);
