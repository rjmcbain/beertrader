

$('document').ready(function() {

	console.log("Document Ready");

var beers = $.ajax('http://api.brewerydb.com/v2/beers/?key=c24e47d7e7a3d4bdb4b230a38d078542&format=json&availableId=1&withBreweries=Y').done(function(data){

for (i=0; i<data.beers.length; i++){
	$('#beers').append($('<img>', {src: data.beers[i].image}));
	$('#beers').append($('<li>').text(data.beers[i].name));
}



$('#beerSubmit').on ('click' function(event){
	console.log('hello');
	// $.ajax({
	// 	type: 'GET',
	// 	url: 'http://api.brewerydb.com/v2/beers/?key=c24e47d7e7a3d4bdb4b230a38d078542&format=json&availableId=1&withBreweries=Y',
	// 	data: {
	// 		"brewery": newBrewery,
	// 		"name": newBeer,
	// 		"style": newStyle,
	// 		"year": newYear,
	// 		"abv": newAbv,
	// 		"origin": newOrigin,
	// 	},
	// 	// dataType='JSON'
	// });
});

// 	var formdata =

// 	$('form#beerSubmit').submit (function(event){
//       event.preventDefault();

//       $.post('/api/albums', formdata, function(album){
//         renderAlbum(album);
//       });
//       $(this).trigger('reset');
//   });

// });


