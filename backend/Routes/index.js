let express = require('express');
var app = require('express').Router();
let path = require('path');

app.use('/exercises',require('./Handlers/exercise.js'));
app.use('/users',require('./Handlers/user.js'));

module.exports = app;