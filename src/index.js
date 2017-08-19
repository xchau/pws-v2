import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import { AppWrapper } from './components/AppWrapper';
import { CustomContent } from './components/CustomContent';
import App from './App';

console.log(CustomContent);

ReactDOM.render(
  <Router>
    <Route exact path="/" component={AppWrapper(CustomContent)} />
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
