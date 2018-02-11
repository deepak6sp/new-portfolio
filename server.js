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
import Html from './src/html.js';

if(process.argv[2] == 'dev') {
  const webpack = require('webpack');
  const config = require('./webpack.config.dev');
  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.get(['/', '/projects', '/about', '/projects/:projectName'], function (req, res) {
    // res.sendFile(path.join(__dirname, 'index.html'));
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

// app.get('/projects/:projectName', (req, res, next) => {
//     res.redirect("/projects")
//     next
// });

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/bundle.js', express.static(path.join(__dirname, 'bundle.js')));

app.listen('8080');
