var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
	name: {
        type : String,
    },
    age: {
        type : String,
    },
})

module.exports = mongoose.model('users', userSchema);