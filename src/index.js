import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

import {createStore, applyMiddleware, compose } from 'redux';
import {Provider} from 'react-redux';
import ReduxPromise from 'redux-promise';
import Router from './routes/router.js';
import MainReducer from './reducers';

const createStoreWithMiddleware = compose(applyMiddleware(ReduxPromise)(createStore));
const store = createStoreWithMiddleware(MainReducer);


ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
document.getElementById('main')
);


/**
 * This is required for webpack hot reloading

if (module.hot) {
    module.hot.accept();
}
 */
