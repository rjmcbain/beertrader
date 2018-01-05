// require express and other modules
const express = require('express')
const app = express();

// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

//api key
const api = require("./env");
	console.log(api);

//connect to mongoose
mongoose.connect('mongodb://localhost/beertrader');
// var db = mongoose.connection

//requests

app.get('/', function(req, res){					//This is what the
	res.send('Please use /api/beertrader');			//user sees when
});													//they visit our page





app.listen(3000, function() {
	console.log("Listening at http://localhost:3000");
});