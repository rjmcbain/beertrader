// require express and other modules
const express = require('express');
const app = express();
const env = require('./env');

// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const router = require('./router');
const path = require('path');
const passport = require('passport');
const morgan       = require('morgan');
const cookieParser = require('cookie-parser');
const flash        = require('connect-flash');
const session      = require('express-session');

//connect to mongoose
mongoose.connect('mongodb://localhost/beertrader');
var db = mongoose.connection;

//requests

app.use(bodyParser.urlencoded({extended: true}));

// app.use(express.static(path.join(__dirname, 'public')));
// app.engine('ejs', require('ejs').renderFile);
// app.set('view engine', 'ejs');

app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function homepage (req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

require('./config/passport.js')(passport);

  // var ajax = $.get('http://api.brewerydb.com/v2/beers/?name=" + req.query.beerinfo + "&key=" + env.apiKey + "&format=json&withBreweries=Y"')
  //   .done(function(data){
  //     console.log(data);
  //   });

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