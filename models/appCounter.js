/**
 * Created by sajibsarkar on 12/1/16.
 */


var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    Schema = mongoose.Schema;


var counterSchema = new Schema({
    current: {type: Number}
});


var appCounter = mongoose.model('appCounter', counterSchema);

module.exports = appCounter;