import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';
import reducers from '../reducers';
import { connectToCollection } from '../../utilities/pouchDB'
import Banner from './Banner';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

import '../sass/index.scss';

// Create store and history
const history = createHistory();
const store = createStore(
  reducers,
  applyMiddleware(routerMiddleware(history))
);

// Connect to db collections
['users'].forEach(cv => connectToCollection(cv, store.dispatch));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route component={Banner}/>
        <div className='section'>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={SignUp}/>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('reactContainer')
);
