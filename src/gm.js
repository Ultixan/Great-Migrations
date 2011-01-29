var selectRaces;
var nextTurn;
var karma;
var karmaEvents;

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
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET","data.xml",false);
	xmlhttp.send(null);
	var xmlDoc = xmlhttp.responseXML;
	karmaEvents = new Array(races.length);
	var badKarma = xmlDoc.getElementsByTagName("badkarma")[0];
	for(var i=0; i < races.length; ++i) {
		builder += "<button type=\"button\" id=\"" + races[i] + "_button\" onclick=\"SendKarma('" + races[i] + "');\">" + races[i] + "</button>\n";
		karmaEvents[races[i]] = new Array();
		var eventlist = badKarma.getElementsByTagName(races[i]);
		for(var j=0; j < eventlist.length; ++j) {
			var event = new Object();
			event.title = eventlist[j].getElementsByTagName("title")[0].firstChild.nodeValue;
			event.text = eventlist[j].getElementsByTagName("text")[0].firstChild.nodeValue
			karmaEvents[races[i]].push(event);
		}
	}
	giveKarma.innerHTML = builder;
}

function DoKarma(race) {
	document.getElementById("karma_event").style.display = "block";
	document.getElementById("give_karma").style.display = "none";
	if(karma[race] >= karma.length) {
		var event = karmaEvents[race][Math.floor(Math.random() * karmaEvents[race].length)];
		document.getElementById("karma_title").innerHTML = event.title;
		document.getElementById("karma_text").innerHTML = event.text;
		karma[race] = 0;
	}
	else {
		document.getElementById("karma_title").innerHTML = "";
		document.getElementById("karma_text").innerHTML = "";
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