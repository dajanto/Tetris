window.onload = function () {

	initializePlayfield();
	initializeTiles();
	registerKeylistener();

	// For not pressing the button every single time testing functionality
	startGame();

}

var playfieldArray = [];

var lastFrameTimeMs = 0 // The last time the loop was run
var maxFPS = 30; // The maximum FPS we want to allow

var movingTile;

function spawnAllTiles() {

	// Iterate over tileList and spawn all tiles

	// Notes:
	// Take element of tileList (the ith)
	// tile is the tileLists ith element
	// j is 0, k is 0 - tile size is f.e. 3
	// x and y of the ith tile is 0 and 5
	//
	// playfieldArray[0][5] = tile.block[0][0]
	// playfieldArray[0][6] = tile.block[0][1]
	// playfieldArray[0][7] = tile.block[0][2]
	//
	// playfieldArray[1][5] = tile.block[1][0]
	// playfieldArray[1][6] = tile.block[1][1]
	// playfieldArray[1][7] = tile.block[1][2]
	//
	// playfieldArray[2][5] = tile.block[2][0]
	// playfieldArray[3][6] = tile.block[2][1]
	// playfieldArray[4][7] = tile.block[2][2]
			 
 	initializePlayfield();

	for (var i = 0; i < tileList.length; i++) {

		var tile = tileList[i];

		for (var j = 0; j < tile.size; j++) {

			for (var k = 0; k < tile.size; k++) {

				var tileCellContent = tile.block[j][k];
				var empty = "";

				try {

					// Useless condition, always true
					// if(playfieldArray[tile.x + j][tile.y + k] === empty && playfieldArray[tile.x][tile.y] === empty) {
			
					if(playfieldArray[tile.x + j][tile.y + k] === empty) {

						playfieldArray[tile.x + j][tile.y + k] = tileCellContent;

					} else {

						// Collision ??????????????
						// console.log("test");
						// playfieldArray[tile.x - j][tile.y + k] = tileCellContent;
					}

				}
				catch(error) {

					// console.log(error);
				}
				finally {

				}
			}
		}
	}
}

function rotateTile() {

	// Rotation is working but the rotation method needs to be adjusted
	// Atm all tiles of the same shape are getting rotated 
	var array = movingTile.block;
	
	movingTile.block = rotate90(array);

	if(movingTile.position < 4) {

		movingTile.position++;

	} else {

		movingTile.position = 0;
	}
}

function updatePlayfield() {

	// TODO Out of bounce 
	if(movingTile.x < 20 - movingTile.size) {
		
		movingTile.x++;
		spawnAllTiles();

	} else {

		movingTile = new Tile();
		addTile(movingTile);
	}


	// Disappearing row condition

	// Game over / win condition
}

function game(timestamp) {

	if (timestamp < lastFrameTimeMs + (5000 / maxFPS)) {
        requestAnimationFrame(game);
        return;
    }

    lastFrameTimeMs = timestamp;

	updatePlayfield();
	drawPlayfield(playfieldArray);
	requestAnimationFrame(game);

}

function startGame() {

	// CLeanup doesn't work atm
	playfieldArray = [];
	spawnAllTiles();

	movingTile = new Tile();
	addTile(movingTile);

	requestAnimationFrame(game);
}

function initializePlayfield() {

	for (var i = 0; i < 20; i++) {

		playfieldArray[i] = [];

		for (var j = 0; j < 10; j++) {

			playfieldArray[i][j] = "";
		}		
	}
}

function drawPlayfield(playfieldArray) {

	var numberOfRows = 20;
	var numberOfColumns = 10;
	var numberOfCells = numberOfRows * numberOfColumns;

	var currentCellsContent;

    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    table.appendChild(tableBody);

    // Cleanup
    getPlayfield().innerHTML = "";

    for (var i = 0; i < numberOfRows; i++) {

        var row = document.createElement('tr');

        row.style = "background-color: white";
	   	
	   	tableBody.appendChild(row);

       for (var j = 0; j < numberOfColumns; j++) {

			var cell = document.createElement('td');

			cell.width= '25';
			cell.height = "25";
			cell.align = "center";
			cell.style = "font-weight: bold; color: black";

			currentCellsContent = document.createTextNode(playfieldArray[i][j]);

			cell.appendChild(currentCellsContent);


			// Adding colors
			var img = document.createElement("img");
			img.height = 50;
			img.width = 50;

			switch(playfieldArray[i][j]) {

				case "o": 
					img.src = "colors/orange.png";
					break;
				case "i":
					img.src = "colors/darkgrey.png";
					break;
				case "s":
					img.src = "colors/grey.png";
					break;
				case "z":
					img.src = "colors/hyperlightgrey.png";
					break;
				case "l":
					img.src = "colors/lightgrey.png";
					break;
				case "j":
					img.src = "colors/superlightgrey.png";
					break;
				case "t":
					img.src = "colors/yellow.png";
					break;
				default: 
					img.src = "colors/white.png";
					break;	
			}
			cell.replaceChild(img, currentCellsContent);


			row.appendChild(cell);
       }
    }
    // table.frame = 'box';
    table.border = 1;

    getPlayfield().appendChild(table);
}

function getPlayfield() {
	return document.getElementById("playfield");
}

function getBody() {
	return document.getElementsByTagName("body")[0];
}

function getNewGameButton() {
	return document.getElementById("newGameButton");
}