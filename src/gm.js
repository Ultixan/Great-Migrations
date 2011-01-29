var selectRaces;
var nextTurn;
var karma;

function PickPlayers() {
	var numplayers = document.getElementById("players").value;
	document.getElementById("start").style.display = "none";
	document.getElementById("races").style.display = "block";
	selectraces = function() {
		var races = new Array();
		var allRaces = new Array();
		var boxes = document.getElementById("race_selection").race;
		for(var i = 0; i < boxes.length; ++i) {
			if(boxes[i].checked) {
				races.push(boxes[i].value);
				allRaces.push(boxes[i].value);
			}
		}
		if(races.length != numplayers) {
			alert("Please select " + numplayers + " races.");
		}
		else {
			Initialize(races);
			document.getElementById("races").style.display = "none";
			var game = document.getElementById("game");
			game.style.display = "block";
			var hadturn = new Array();
			karma = new Array(races.length);
			for(var i=0; i < races.length; ++i) {
				karma[races[i]] = 0;
			}
			var nextRace = Math.floor(Math.random() * races.length);
			nextTurn = function() {
				DisplayButtons(allRaces)
				var race = races[nextRace];
				var raceButton = document.getElementById(race + "_button");
				raceButton.style.display = "none";
				races.splice(nextRace,1);
				hadturn.push(race);
				game.setAttribute("class",race);
				DoKarma(race);
				
				//game logic goes here

				if(hadturn.length == numplayers) {
					nextRace = Math.floor(Math.random() * (hadturn.length - 1));
					while(hadturn.length > 0)
						races.push(hadturn.shift());
					hadturn.clear();
				}
				else {
					nextRace = Math.floor(Math.random() * races.length);
				}
			}
			nextTurn();
		}
	}
}

function DisplayButtons(races) {
	for(var i=0; i < races.length; ++i) {
		document.getElementById(races[i] + "_button").style.display = "block";
	}
}

function Initialize(races) {
	var giveKarma = document.getElementById("give_karma");
	var builder = "";
	for(var i=0; i < races.length; ++i) {
		builder += "<button type=\"button\" id=\"" + races[i] + "_button\" onclick=\"SendKarma('" + races[i] + "');\">" + races[i] + "</button>\n"
	}
	giveKarma.innerHTML = builder;
}

function DoKarma(race) {
	document.getElementById("karma_event").style.display = "block";
	document.getElementById("give_karma").style.display = "none";
	if(karma[race] >= karma.length) {
		alert("Ding ding!");
		karma[race] = 0;
	}
	else {
		
	}
}

function EndKarma() {
	document.getElementById("karma_event").style.display = "none";
	document.getElementById("give_karma").style.display = "block";
}

function SendKarma(race) {
	var karmaHit = 1;
	if(race == "dodo")
		karmaHit *= 1.5;
	karma[race] += karmaHit;
	nextTurn();
}