// require express and other modules
const express = require('express');
const app = express();

// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const router = require('./router');
const path = require('path');

app.use(function(request, response, next) {
	// console.log("Just got a request");
	next();
})

// //api key
// const api = require("./env");
// 	console.log(api);

//connect to mongoose
mongoose.connect('mongodb://localhost/beertrader');
var db = mongoose.connection;

//requests

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

// app.set('views', './views');


app.post('api/beers', function(req, res){
	var newBeer = new db.Beer ({
		name: req.body.name,
		abv: req.body.abv,
		style: req.body.style,
		brewery: req.body.brewery
	})
})

app.use('/', router);

app.listen(3000, function() {
	console.log("Listening at http://localhost:3000");
});