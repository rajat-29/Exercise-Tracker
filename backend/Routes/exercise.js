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

app.route('/getExercises').get((req, res) => {
    exercise.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('error ' + err))
});

app.route('/:id').delete((req, res) => {
    exercise.findByIdAndDelete(req.params.id)
        .then(() => { res.json('exercise deleted'); })
        .catch(err => res.status(400).json('error ' + err));
});

module.exports = app;