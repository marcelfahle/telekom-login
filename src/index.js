import { render } from 'react-dom';
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
//import rootRoute from 'pages/routes';

import App from './App';
import Home from './pages/Home';
import Funktionen from './pages/Funktionen';
import SoGehts from './pages/SoGehts';
import Dienste from './pages/Dienste';

import './index.html';

const onUpdate = () => {
  console.log('onUpdate');
  window.scrollTo(0,0);
}


render(
  <Router  onUpdate={() => onUpdate()} history={ browserHistory }>
    <Route path="/" onUpdate="hello" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="/funktionen" component={ Funktionen } />
      <Route path="/so-gehts" component={ SoGehts } />
      <Route path="/dienste-uebersicht" component={ Dienste } />
    </Route>
  </Router>
, document.getElementById('root') );

