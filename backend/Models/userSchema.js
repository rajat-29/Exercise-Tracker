var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
	name: {
        type : String,
        required : true,
        unique : true,
        minlength : 3,
    },
    email: {
        type : String,
        required : true,
        unique : true,
        minlength : 3,
    },
})

module.exports = mongoose.model('users', userSchema);