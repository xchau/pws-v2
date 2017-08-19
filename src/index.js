import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import AppWrapper from './components/AppWrapper';

import { CustomContent } from './components/CustomContent';
import { Test } from './components/Test';

ReactDOM.render(
  <Router>
    <Switch>
      <Route
        exact path="/"
        component={AppWrapper(CustomContent)}
      />
      <Route
        path="/test"
        component={AppWrapper(Test)}
      />
    </Switch>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
