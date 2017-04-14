//we need to bring something in.... EXPRESS!!

var express = require('express');
//we could have used app if we wanted to
var router = express.Router();

//we ALSO need to require the controllers...
//have to require the specific file(cause we don't have an index.js)
var cargoControllers = require('../controllers/cargoControllers');//no .js

//ROUTES only
//the first route we want is the get
//Cargo form

/////////////////////////go into cargoControllers and get cargoGet 
router.get('/cargo/new', cargoControllers.cargoGet);
	//this needs to point to the controllers

// post

//                      go into cargoControlloers, and call the post function
router.post('/cargo', cargoControllers.cargoPost);


///EXPORT ROUTES
// the routers are available to the rest of the thing
module.exports = router;



// Cargo.create({description: req.body.description, title: req.body.title}, function(error, cargo) {
// 		//also rendering the cargoShow file on the web
// 		res.render('cargoShow', {cargo: cargo});
//and look at that controller
	//creating a db entry of cargo in the mongo DB, makes it and saves it in
	//ONE step
	


//we also need to export them...