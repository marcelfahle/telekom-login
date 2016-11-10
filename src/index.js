import { render } from 'react-dom';
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
//import rootRoute from 'pages/routes';

import App from './App';
import Home from './pages/Home';
import Funktionen from './pages/Funktionen';

import './index.html';

render(
  <Router  onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ Home } />
      <Route path="/funktionen" component={Funktionen} />
    
    </Route>
  </Router>
, document.getElementById('root') );
