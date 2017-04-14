//we need to require something here
var db = require('../models');
//we are giving a js variable the same name as mongo's db uses..
//it's less confusing
//when we say db we are literally talking about our database model

//we need a controller that models our routes...
//WE ARE NOT GOING TO RUN FUNCTIONS IN OUR ROUTES

//both of these functions were chopped out of their routes,
// we just moved them to a new page

var cargoGet = function(req,res){
	res.render('cargoNew');
		//rendering a form with it's own route inside of it
	//cargoNew.ejs
};


	

//create callback function
var cargoPost = function(req,res){
	//create new cargo db with the req.body's description and title inside
	db.Cargo.create({description: req.body.description, title: req.body.title}, 
		function(error, cargo) {
		//also rendering the cargoShow file on the web
		res.render('cargoShow', {cargo: cargo});
	});
};



module.exports.cargoPost = cargoPost;
module.exports.cargoGet = cargoGet;
