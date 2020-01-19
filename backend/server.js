var express = require('express');
var path = require('path');
var app = express();
var mongodb = require('mongodb');
var port = 8000;

var mongoose = require('mongoose');
var mongoDb = 'mongodb://localhost/exerciseTracker';

mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(mongoDb, {useNewUrlParser : true});

app.use(express.urlencoded({extended: true}))
app.use(express.json()) 

mongoose.connection.on('error', (err) => {
	console.log('DB connection error');
})

mongoose.connection.on('connected', (err) => {
	console.log('DB connected');
})

app.listen(port, () => {
	console.log('Running on port ' +port);
});