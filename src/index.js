import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
require('firebaseui/dist/firebaseui.css')
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import config from './config'
import List from './components/List';
import Auth from './components/Auth';
import Detail from './components/Detail';
import MainLayout from './layouts/main';

injectTapEventPlugin();
firebase.initializeApp(config);
window.firebase = firebase;
window.firebaseui = firebaseui;

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route component={MainLayout}>
        <Route path="/" component={List}/>
        <Route path="/auth" component={Auth}/>
        <Route path="/tabs/:tabId" component={Detail}/>
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
