var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exerciseSchema = new mongoose.Schema({
	userName: {
        type : String,
        required : true,
    },
    description: {
        type : String,
        required : true,
    },
    duration: {
        type : Number,
        required : true,
    },
    date: {
        type : Date,
        required : true,
    },
})

module.exports = mongoose.model('exercises', exerciseSchema);