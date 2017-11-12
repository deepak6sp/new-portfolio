const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler));
app.use(require('webpack-hot-middleware')(compiler));

// app.get(['/', '/projects', '/projects/:projectName'], (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });
//
// app.get('/projects/:projectName', (req, res, next) => {
//   next();
// });

app.get(['/', '/projects'], function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/projects/:projectName', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen('8080');
