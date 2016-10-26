import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.js';
import Home from './Home.js';
import About from './About.js';
import CreateTest from './CreateTest.js';
import Tests from './Tests.js';


export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="create" component={CreateTest} />
    <Route path="tests" component={Tests} />
  </Route>
)
