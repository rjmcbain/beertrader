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
// app.engine('ejs', require('ejs').renderFile);
// app.set('view engine', 'ejs');

app.get('/', function homepage (req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/', function homepage (req, res) {
	res.sendFile(__dirname + '/public/styles');
});

app.use(express.static("/public/main.css"));

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

app.listen(port, function() {
  console.log('server started on', port);
});