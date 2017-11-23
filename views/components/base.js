'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Login from './login';
import Dashboard from './dashboard';
require('../less/main.less');

document.title = 'Booth Tool ' + require('../../package.json').version;

class Base extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loggedIn: false
    };
    this.logIn = this.logIn.bind(this);
    this.renderBackground = this.renderBackground.bind(this);
  }

  logIn () {
    this.setState({
      loggedIn: true
    });
  }

  renderBackground (ele) {
    return (
      <div className='BackgroundColor-bg'>
        <div className='BackgroundColor-fg'>
          {ele}
        </div>
      </div>
    );
  }

  render () {
    return (
      !this.state.loggedIn
        ? this.renderBackground(<Login logIn={this.logIn}/>)
        : this.renderBackground(this.props.children)
    );
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/Users/preesm/git/electron/src/html/index.html' component={Base}>
      <IndexRoute component={Dashboard}>
      </IndexRoute>
    </Route>
  </Router>
  ),
  document.getElementById('content')
);

