//Set up DB -- look at those models
var mongoose = require("mongoose"); //sets up mongoose
mongoose.connect("mongodb://localhost/airport"); //connects to the db
//its db should be airport
var Schema = mongoose.Schema;
var CargoSchema = new Schema({
    title: String,
    description: String
});
var Cargo = mongoose.model('Cargo', CargoSchema);

//missing next step
module.exports = Cargo;