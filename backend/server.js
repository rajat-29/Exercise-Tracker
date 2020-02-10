var express = require('express');
var path = require('path');
var app = express();
var mongodb = require('mongodb');
var port = 5000;
const cors = require('cors');
const morgan=require('morgan');

app.use(cors());
app.use(cors({origin: true, credentials: true}));
app.use(express.urlencoded({extended: true}))
app.use(express.json()) 

// DB //
require("./static/db");

const exerciseRouter = require('./Routes/exercise');
const userRouter = require('./Routes/user');

app.use(morgan('tiny'));
app.use('/exercises',exerciseRouter);
app.use('/users',userRouter);

app.listen(port, () => {
	console.log('Running on port ' +port);
});