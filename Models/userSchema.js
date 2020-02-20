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

const User = mongoose.model('users', userSchema);

module.exports = User;