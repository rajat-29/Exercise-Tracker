var express = require('express');
var path = require('path');
var app = express();
var mongodb = require('mongodb');
var port = 5000;
const cors = require('cors');
const morgan=require('morgan');
var bodyParser = require("body-parser");
require("dotenv").config();

app.use(cors());
app.use(cors({origin: true, credentials: true}));
app.use(express.urlencoded({extended: true}))
app.use(express.json()) 

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// DB //
require("./static/db");

// const exerciseRouter = require('./Routes/exercise');
// const userRouter = require('./Routes/user');

app.use(morgan('tiny'));
// app.use('/exercises',exerciseRouter);
// app.use('/users',userRouter);

app.use('/',require('./Routes/'));

app.listen(port, () => {
	console.log('Running on port ' +port);
});