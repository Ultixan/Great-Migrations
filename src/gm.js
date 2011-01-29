var selectRaces;
var nextTurn;

function PickPlayers() {
	var numplayers = document.getElementById("players").value;
	document.getElementById("start").style.display = "none";
	document.getElementById("races").style.display = "block";
	selectraces = function() {
		var races = new Array();
		var boxes = document.getElementById("race_selection").race;
		for(var i = 0; i < boxes.length; ++i) {
			if(boxes[i].checked)
				races.push(boxes[i].value);
		}
		if(races.length != numplayers-1) {
			alert("Please select " + numplayers + " races.");
		}
		else {
			document.getElementById("races").style.display = "none";
			var game = document.getElementById("game");
			game.style.display = "block";
			game.setAttribute("class",races[0]);
		}
	}
}