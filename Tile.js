

var id
var x;
var y;
var position;
var block;
var size;

function Tile() {

	var rtile = getRandomTile();
	
	this.id = rtile.id;
	this.x = rtile.x;
	this.y = rtile.y;
	this.position = rtile.position;
	this.block = rtile.block;
	this.size = rtile.size;
}