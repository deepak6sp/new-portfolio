const path = require('path');
const express = require('express');
const app = express();

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import {createStore } from 'redux';
import {Provider} from 'react-redux';
import MainReducer from './src/reducers';

import App from './src/containers/home';
import Html from './src/html-prod.js';

app.get(['/', '/projects', '/about', '/projects/:projectName'], function (req, res) {
    const initialData = {};

    const Store = createStore(MainReducer);

    const body = renderToString(
      <Provider store={Store}>
        <StaticRouter location={req.url} context={initialData}>
          <App/>
        </StaticRouter>
      </Provider>);
    res.send(
      Html({ body })
    );
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen('8080');
