import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import { wrapApp } from './components/wrapApp';
import { CustomContent } from './components/CustomContent';
import { Test } from './components/Test';

ReactDOM.render(
  <Router>
    <Switch>
      <Route
        exact path="/"
        component={wrapApp(CustomContent)}
      />
      <Route
        path="/test"
        component={wrapApp(Test)}
      />
    </Switch>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
