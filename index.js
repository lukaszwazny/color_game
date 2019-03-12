var colors = [];
var divs = document.querySelectorAll(".square");
var pickedColor;
var rgb = document.querySelector("#RGB");
var message = document.querySelector("#message");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var wasEasy = false;

resetColors(6);

reset.addEventListener("click", function(){
	resetColors(divs.length);});

easy.addEventListener("click", function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	changeLevel(3);
});

hard.addEventListener("click", function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	changeLevel(6);
});

function changeLevel(number){
	var container = document.querySelector("#container");
	container.innerHTML = "";
	for(var i = 0; i < number; i++){
		container.innerHTML += "<div class=\"square\"></div>";
	}
	divs = document.querySelectorAll(".square");
	resetColors(number);
}

function generateRandomColors(number){
	var randomColors = [];
	for (var i = 0; i < number; i++){
		var red = Math.floor(Math.random() * 255);
		var green = Math.floor(Math.random() * 255);
		var blue = Math.floor(Math.random() * 255);
		randomColors.push("rgb(" + red + ", " + green + ", " + blue + ")");
	}
	return randomColors;
}

function resetColors(number){
	colors = generateRandomColors(number);

	for(var i = 0; i < divs.length; i++){
		divs[i].style.backgroundColor = colors[i];
		divs[i].addEventListener("click", divClicked);
	}

	pickedColor = pickColor();
	rgb.innerText = pickedColor;
	document.querySelector("h1").style.backgroundColor = "steelblue";
	message.innerText = "";
	reset.innerText = "new colors";
}

function divClicked(){
	var clickedColor = this.style.backgroundColor;
	if(clickedColor == pickedColor){
		changeColors(pickedColor);
		reset.innerText = "play again?";
		message.innerText = "Correct!";
	}else{
		this.style.backgroundColor = "#232323";
		message.textContent = "Try again!";
	}
}

function changeColors(color){
	for(var j = 0; j < divs.length; j++){
			divs[j].style.backgroundColor = color;
	}
	document.querySelector("h1").style.backgroundColor = color;
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

