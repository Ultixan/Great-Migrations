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
			<button type="button" id="setplayers" onclick="PickRaces();">Next</button>
		</div>
		<div id="races">
			Please select which races are being used:
			<input type="checkbox" name="race" value="1">Dodo</input>
			<input type="checkbox" name="race" value="2">Elephant Bird</input>
			<input type="checkbox" name="race" value="4">Lesser Bilby</input>
			<input type="checkbox" name="race" value="8">Irish Elk</input>
			<input type="checkbox" name="race" value="16">Mammoth</input>
			<input type="checkbox" name="race" value="32">Quagga</input>
		</div>
	</body>
</html>