// Tiles
var O;
var I;
var S;
var Z;
var L;
var J;
var T;

var tileList = [];


function addTile(tile) {

	tileList.push(tile);
}

function getRandomTile() {

	var tileArray = [O, I, S, Z, L, J, T];
	var rtile = tileArray[Math.floor(Math.random() * tileArray.length)];
	
	return rtile;
}

function initializeTiles() {

	O = {
		 id: "o",
		 size: 2,
		 block: [
		 		["o","o"],
		    	["o","o"]
		    	],
		 x: 0,
		 y: 5,
		 position: 0,
		}


	S = { 
		  id: "s",
		  size: 3,
		  block: [["" ,  "",   ""],
				 [ "" , "s", "s"],
				 ["s", "s",  ""]],
 		 x: 0,
		 y: 5,
		 position: 0,
		};

 	Z = {
 		 id: "z",
 		 size: 3,
 		 block: [[  "",   "",   ""],
 				["z", "z",  ""],
				[  "",  "z", "z"]],
		 x: 0,
		 y: 5,
		 position: 0,
		};

  	I = {
  		 id: "i",
  		 size: 4,
		block: [[ "", "i", "", ""],
				[ "", "i", "", ""],
	    		[ "", "i", "", ""],
				[ "", "i", "", ""]],
		 x: 0,
		 y: 5,
		 position: 0,

		};

  	J = { 
  		id: "j",
  		size: 3,
		block: [["",   "",    ""],
  				["l", "l",  "l"],
   				[  "",   "",   "l"]],
		 x: 0,
		 y: 5,
		 position: 0,

   		};

	T = {
		 id: "t",
		 size: 3,
		block: [[ "",   "",    ""],
				[ "t", "t",  "t"],
   				[ "",  "t",   ""]],
		 x: 0,
		 y: 5,
		 position: 0,

   		};

	L = {
	    id: "l",
	    size: 3,
		block: [["",   "",   "" ],
	    		["",   "",  "l"],	
   				["l", "l", "l"]],
		 x: 0,
		 y: 5,
		 position: 0,
   		};
}