import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from 'views/App'

import 'styles/reset';
import 'styles/main';

injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('app'));