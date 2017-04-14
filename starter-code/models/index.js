//PURPOSE
//pacakge up all models into a SINGLE file
//require and export in the same step
//need to bring in mongoose

//var mongoose = require('mongoose');

//need to tell it to connect to database
//mongoose.connect("mongodb://localhost/airport");
//we connect to the db 

module.exports.Cargo = require('./cargo.js');


//requires our cargo file and immediately exports it...
