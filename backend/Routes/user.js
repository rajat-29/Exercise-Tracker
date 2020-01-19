var app = require('express').Router();
let path = require('path');

var users = require('../Models/userSchema');

app.post('/add', function(req,res) {
    users.create(req.body,function(error,result) {
        if(error)
          throw error;
        else{
          res.send("data saved");
        }
    })
})

module.exports = app;