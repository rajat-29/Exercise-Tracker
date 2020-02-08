var app = require('express').Router();
let path = require('path');

let exercise = require('../Models/exerciseSchema');

app.route('/add').post((req, res) => {
    exercise.create(req.body,function(error,result)
      {
        if(error)
        throw error;
        else{}
      })
     res.send("data saved");
});


module.exports = app;