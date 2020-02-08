var app = require('express').Router();
let path = require('path');

let user = require('../Models/userSchema');

app.route('/add').post((req, res) => {
    user.create(req.body,function(error,result) {
        if(error)
          throw error;
        else{
          
        }

    })
    res.send("data saved");
})

app.route('/getUsers').get((req, res) => {
    user.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('error ' + err))
});

module.exports = app;