var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exerciseSchema = new mongoose.Schema({
	username: {
        type : String,
    },
    description: {
        type : String,
    },
    duration: {
        type : Number,
    },
    date: {
        type : Date,
    },
})

const Excercise = mongoose.model('exercises', exerciseSchema);

module.exports = Excercise;