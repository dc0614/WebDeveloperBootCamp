/*
	Movie DB
	Create an array of movie objects. Each movie should have a title, rating and hasWatched properties. Iterate through the array and print out the values of the database
*/

var movies = [
	{
		title: "Sound of Music",
		rating: 4.5,
		hasWatched: true
	},
	{
		title: "Mary Poppins",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Sing",
		rating: 4,
		hasWatched: false
	},
	{
		title: "Guardians of the Galaxy II",
		rating: 3.5,
		hasWatched: false
	}
]


for (var i = 0; i < movies.length; i++){
	if(movies[i].hasWatched === true){
		console.log("You have seen " + movies[i].title + " - " +movies[i].rating + " stars");
	}
	else{
		console.log("You have not seen " + movies[i].title + " - " +movies[i].rating + " stars");
	}
}


/*
	Optional forEach
	movies.forEach(function(movie){
		var result = "You have ";
		if (movie.hasWatched){
			result += "watched ";
		}
		else{
			result += "not seen ";
		}

		result += "\"" + movie.title + "\" -";
		result += movie.rating + " stars";
		console.log(result);
 	});

*/