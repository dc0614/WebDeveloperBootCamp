var userNumber = 4;

var guess = Number(prompt("Guess a number "));

alert(guess);

if (guess === userNumber) {
	alert("You got it right");
}
else if (guess > userNumber) {
	alert("Too high, guess again!");
}
else {
	alert("Too low, guess again!");
}