// VARIABLES AT THE TOP
var options = ["knight", "wizard", "archer"];
var	result = document.querySelector("#rps_result");
var	buttons = document.querySelector("#rps_buttons");
var	split = document.querySelector(".split");
var	baddies = document.querySelector(".baddies");
let playerFate = ""
let computerFate = ""
let audioselect = new Audio()
let audiowin = new Audio()
let audioloss = new Audio()
let audiotie = new Audio()

// audioselect.src= 'audio/uiSelect.wav'
audiowin.src= 'audio/uiWin.wav'
audioloss.src= 'audio/uiLoss.wav'
audiotie.src= 'audio/uiTie.wav'

// Show and hide the 3 buttons. When showing results, show play agian button; Click play button, show three options.
function showOptions(){
	buttons.style.display = "block";
	result.style.display = "none";
	split.style.display = "block";
	baddies.style.display ="flex";
	playerFate = ""
	computerFate = ""
	document.body.style.background = "#fde1ab";

}

function showResults(){
	buttons.style.display = "none";
	result.style.display = "flex";
	split.style.display = "none";
	baddies.style.display = "none";
}

function makeComputerChoice(){
	return computerchoice = Math.floor( Math.random() * options.length);   
}

function makeGameResult(userchoice, computerchoice){
	let resultstring = "";
	if(userchoice == computerchoice) {
		resultstring= "<div>Your too evenly machted</div>";
		playerFate = ""
		computerFate = ""
		document.body.style.background = "#e0e8c0"; 
		audiotie.load();
		audiotie.play();

	}
	else if(
		(userchoice == 0 && computerchoice == 1) || 
        (userchoice == 1 && computerchoice == 2) || 
        (userchoice == 2 && computerchoice == 0) 
		) {
		resultstring="<div>You are Defeated</div>";
		playerFate = "_death"
		computerFate = "_win"
		cpoints ++
		var cpoints = document.getElementById('cpoints')
		var currentCPoints = cpoints.innerHTML;
		currentCPoints ++;
		cpoints.innerHTML = currentCPoints;
		document.body.style.background = "#b3955b";
		audioloss.load();
		audioloss.play();

	}
	else if( 
		(userchoice == 0 && computerchoice == 2) ||
        (userchoice == 1 && computerchoice == 0) ||		
        (userchoice == 2 && computerchoice == 1)   	
		) {
		resultstring="<div>You are Victorious!</div>";
		playerFate ="_win"
		computerFate ="_death"
		ppoints ++
		var ppoints = document.getElementById('ppoints')
		var currentPPoints = ppoints.innerHTML;
		currentPPoints ++;
		ppoints.innerHTML = currentPPoints;
		document.body.style.background = "#fde1ab";	
		audiowin.load();
		audiowin.play();
	}

		document.querySelector("#restext").innerHTML = resultstring
		showResults();
	}

function makeUserChoice(userchoice){
	var computerchoice = makeComputerChoice(); 
	makeGameResult(userchoice, computerchoice);
	console.log(playerFate, computerFate)
	var html = `
			<img src='images/${options[userchoice]}${playerFate}.png' class="resimg">
			<p>vs</p>
			<img src='images/${options[computerchoice]}${computerFate}.png' class="resimg2">
	 `
		document.querySelector("#resimgcontainer").innerHTML = html
		// audioselect.load();
		// audioselect.play();
	
}



window.onload = function(){
	result.style.display = "none";
    document.querySelector(".btn_knight").addEventListener("click", function(){makeUserChoice(0);}, false)
    document.querySelector(".btn_wizard").addEventListener("click", function(){makeUserChoice(1);}, false)
    document.querySelector(".btn_archer").addEventListener("click", function(){makeUserChoice(2);}, false)
}



