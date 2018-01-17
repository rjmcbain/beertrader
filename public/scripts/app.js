

$('document').ready(function() {

	console.log("Document Ready");

let url = "http://api.brewerydb.com/v2/beers/?name=" + req.query.beerinfo + "&key=" + env.apiKey + "&format=json&withBreweries=Y";
let $list = $('#list');
	$.ajax({
		type: 'GET',
		url: 'url',
		success: function(newList) {
			console.log('success', newList);
			// $.each(newList, function(i, order) {
			// 	$newList.append('<li>name: ' + newList.name + ', abv: '+ newList.abv + '</li>');
			})
		}
	})







}



