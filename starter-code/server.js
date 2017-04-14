//Set up Express
var express = require('express');
var app = express();

//Set up bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


//Lets pull in the routes, wcich require mongoose and the mongo db
// pull in the router


//Set up EJS -- look at those views
app.set('views', __dirname+ "/views"); //
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');


// Get those routes from their directory 
var routes = require(__dirname + '/config/routes');

//use all of our Routes for everything

app.use('/', routes);


//Start server
app.listen(3000, function() {
	console.log("Listening at http://localhost:3000");
});