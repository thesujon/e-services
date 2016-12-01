/**
 * Created by sajibsarkar on 12/1/16.
 */


var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    Schema = mongoose.Schema;



var userSchema = new Schema({

});


var user  = mongoose.model('user', userSchema);

module.exports = user;