import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Router from './routes/router.js';
import MainReducer from './reducers';

import '../styles/main.scss';

const store = createStore(MainReducer);


ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
  document.getElementById('main')
);

/**
 * This is required for webpack hot reloading
 */
if (module.hot) {
    module.hot.accept();
}
