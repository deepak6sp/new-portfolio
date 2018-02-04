const path = require('path');
const express = require('express');
const app = express();

if(process.argv[2] == 'dev') {
  const webpack = require('webpack');
  const config = require('./webpack.config.dev');
  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.get(['/', '/projects', '/about', '/projects/:projectName'], function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/bundle.js', express.static(path.join(__dirname, 'bundle.js')));

app.listen('8080');
