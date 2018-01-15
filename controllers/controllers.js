//functions (chefs)
const env = require('../env');
const request = require('request');

function hello(req, res){					//This is what the
	res.render('index');							//user sees when
};				

function beerList(req, res){
	console.log(env.apiKey);
	let url = "http://api.brewerydb.com/v2/beers/?name=" + req.query.beerinfo + "&key=" + env.apiKey + "&format=json&withBreweries=Y";
			request(url, function(req, res, body){
				let result = JSON.parse(body)
				let beer = {
					beerName: result.data[0].name,
					beerAbv: result.data[0].abv,
					brewery: result.data[0].breweries[0].name

				}

					sendResponse(beer);

				
				// console.log(result.data[0].name);
				// console.log(result.data[0].abv);
				// console.log(result.data[0].breweries[0].name);
				// // console.log(typeof(result));
			})		
			function sendResponse(beer){
				res.send(beer);
			}
	// res.send('Hello again!');
}

module.exports.hello = hello;
module.exports.beerList = beerList;


