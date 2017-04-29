
var wincounter = 0;
var losscounter = 0;
var guessesleft = 9;
var guessessofar = [];
var currentguess;
var letterholder;
var options = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


var letter = options[Math.floor(Math.random() * options.length)];

var updateguess = function(){

	document.querySelector('#guessesleft').innerHTML = "Guesses Left: " + guessesleft;
};

var updateletter = function() {
	this.letterholder = this.options[Math.floor(Math.random() *this.options.length)];
};

var updateguessessofar = function() {
	document.querySelector('#guessessofar').innerHTML = "Previous Guesses: " + guessessofar.join(', ');
};

var reset = function() {
	guessesleft = 9;
	guessessofar = [];
	updateletter();
	updateguess();
	updateguessessofar();
}

updateguess();
updateletter();

document.onkeyup = function(event) {
		guessesleft--;
        var currentguess = String.fromCharCode(event.keyCode).toLowerCase();
        guessessofar.push(currentguess);
        updateguessessofar();
        updateguess();

if (guessesleft == 0) {
		losscounter++;
		document.querySelector('#losscounter').innerHTML = "Losses: " + losscounter;
		alert("sorry, you lost");
		reset();
	}	
else if(guessesleft > 0) {
	if (currentguess == letterholder) {
		wincounter++;
		document.querySelector('#wincounter').innerHTML = "Wins: " + wincounter;
		alert("you won!");
		reset();
	}
	}
		
	};

