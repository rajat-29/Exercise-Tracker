var express = require('express');
var path = require('path');
var app = express();
var mongodb = require('mongodb');
var port = process.env.PORT || 5000;   
const cors = require('cors');
const morgan=require('morgan');
require("dotenv").config();

app.use(cors());
app.use(cors({origin: true, credentials: true}));
app.use(express.urlencoded({extended: true}))
app.use(express.json()) 

// DB //
require("./static/db");

app.use(morgan('tiny'));

app.use('/',require('./Routes/'));

if(process.env.NODE_ENV === 'production')
{
	app.use(express.static('client/build'));
}

app.listen(port, () => {
	console.log('Running on port ' +port);
});