/*
	This a basic functions problem set, from section 10, JavaScript Basics
*/


/*
	Takes a single argument and returns true if the number is even, and false otherwise
*/
function isEven(x) {
	return x % 2 === 0;
}


/*
	Takes a single argument and returns the factorial of that argument
	4! is 4 * 3 * 2 * 1 
*/
function factorial(x) {
	var result = 1;
	for (var i = x; i > 0; --i){
		result *= i;
	} 

	return result;
}

/*
	Takes a single kebab-cased string argument and returns the snake_cased version
*/
function kebabToSnake(str) {

	return newString = str.replace(/-/g, "_");
}

/*
 Random function that was used to follow a  scope exercise
*/
function doMath() {
	var x = 40;
	console.log(x);
}


/*
	Example of higher order functions
	setInterval(sing, 1000) - run this after defining sing
*/
function sing() {
	console.log("Twinkle Twinkle...");
	console.log("How I Wonder...");
}

