import React from 'react';
import {RaisedButton} from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CV from './CV/index.jsx';

import 'styles/App';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    return (
      <MuiThemeProvider>
        <CV />
      </MuiThemeProvider>
    );
  }
}