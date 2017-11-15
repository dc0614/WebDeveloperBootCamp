var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var messageDisplay = document.querySelector("#message");
var modeBtns = document.querySelectorAll(".mode");


init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}


function setUpModeButtons(){
	//mode buttons event listeners
	for(var i = 0; i < modeBtns.length; i++){
		modeBtns[i].addEventListener("click", function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}


function setUpSquares(){
		//
	for(var i = 0; i < squares.length; i++) {
		//add clickListeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of picked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				resetButton.textContent = "Play Again?";
			}
			else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}


function reset(){
	//generate all new colors
	colors = generator(numSquares);
	//pick a new random color from array
	pickedColor = pickColors();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
		
	}

	h1.style.background = "steelblue";
}


resetButton.addEventListener("click", function(){
	reset();
});



function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match a given color
		squares[i].style.background  = color;
	}
	
}


function pickColors(){
	//pick a random number
	var random = Math.floor(Math.random() * colors.length);

	return colors[random];
}


function generator(num){
	//make an array
	var genArr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		//getRandom color and push into array
		genArr.push(randomColors());
	}
	//return that array
	return genArr;
}


function randomColors(){
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}