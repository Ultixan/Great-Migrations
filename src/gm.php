<html>
	<head>
		<link href="gm.css" rel="stylesheet" type="text/css">
		<script src="gm.js"></script>
	</head>
	<body>
		<div id="start">
			Please select the number of players:
			<select id="players">
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
			</select>
			<br/>
			<button type="button" id="setplayers" onclick="PickPlayers();">Next</button>
		</div>
		<div id="races">
			Please select which races are being used:
			<form id="race_selection">
				<input type="checkbox" name="race" value="dodo">Dodo</input>
				<input type="checkbox" name="race" value="elephant_bird">Elephant Bird</input>
				<input type="checkbox" name="race" value="lesser_bilby">Lesser Bilby</input>
				<input type="checkbox" name="race" value="irish_elk">Irish Elk</input>
				<input type="checkbox" name="race" value="mammoth">Mammoth</input>
				<input type="checkbox" name="race" value="quagga">Quagga</input>
				<br/>
				<button type="button" id="setraces" onclick="selectraces();">Next</button>
			</form>
		</div>
		<div id="game">
		
		</div>
	</body>
</html>