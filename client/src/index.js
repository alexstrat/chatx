import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './store';
import { syncHistoryWithStore } from 'react-router-redux';

import React from 'react';
import { render } from 'react-dom';
import './index.css';
import '@blueprintjs/core';
import '@blueprintjs/core/dist/blueprint.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: state => state.get('router').toJS()
});

import App from './App';
import SignInPage from './scenes/SignInPage';

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/room/:roomId" />
        <Route path="/rooms" />
        <Route path="/login" />
        <Route path="/register" component={SignInPage} />
      </Route>
    </Router>
  </Provider>
),document.getElementById('root'));
