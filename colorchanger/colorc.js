var button = document.querySelector("button");
var isOrange = false;

button.addEventListener("click", function(){

	if(isOrange){
		document.body.style.background = "white";
	} else {
		document.body.style.background = "orange";
	}

	isOrange = !isOrange;
	
});



/*
	Shortcut is to add a class to the style sheet that sets bkgrd color to orange
	then write the below in js 

	button.addEventListener("click", function(){
		document.body.classList.toggle("className");
	});



*/