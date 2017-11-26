const path = require('path');
const express = require('express');
const app = express();

app.get(['/', '/projects', '/about'], function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/projects/:projectName', (req, res, next) => {
    res.redirect("/projects")
    next
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/bundle.js', express.static(path.join(__dirname, 'bundle.js')));

app.listen('8080');
