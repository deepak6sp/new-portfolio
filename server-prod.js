const path = require('path');
const express = require('express');
const app = express();

app.get(['/', '/projects', '/about', '/projects/:projectName'], function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.listen('8080');
