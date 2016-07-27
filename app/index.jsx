import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from 'views/App'
import 'styles/reset';

ReactDOM.render(<Router history={browserHistory}>
  <Router path="/" component={App}>
  </Router>
  </Router>
  , document.getElementById('app'));