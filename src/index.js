import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import Detail from './components/Detail';

import MainLayout from './layouts/main';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={App}/>
      <Route path="/tabs/:tabId" component={Detail}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
