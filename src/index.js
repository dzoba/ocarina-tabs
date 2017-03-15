import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import firebase from 'firebase';

import config from './config'
import List from './components/List';
import Detail from './components/Detail';
import MainLayout from './layouts/main';


window.firebase = firebase.initializeApp(config);

// db.ref('/').once('value').then(function(snapshot) {
//   console.log('promise', snapshot.val())
// });

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={List}/>
      <Route path="/tabs/:tabId" component={Detail}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
