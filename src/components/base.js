'use strict';

require('../less/main.less');
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';

document.title = 'Booth Tool ' + require('../../package.json').version;

ReactDOM.render(
  <Login />,
  document.getElementById('content')
);

