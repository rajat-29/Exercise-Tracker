var app = require('express').Router();
let path = require('path');

var exercises = require('../Models/exerciseSchema');

app.post('/add', function(req,res) {
    exercises.create(req.body,function(error,result) {
        if(error)
          throw error;
        else{
          res.send("data saved");
        }
    })
})

module.exports = app;