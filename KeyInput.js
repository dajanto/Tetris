function registerKeylistener() {

	document.addEventListener("keydown", function (event) {
	 	
	 	if (event.defaultPrevented) {
	    	return;
	    }

 	switch (event.key) {

	    case "ArrowDown":

	      movingTile.x = movingTile.x + 2;

	      break;

  	    case "ArrowUp":

	    	rotateTile();

	      break;

	    case "ArrowLeft":

	    	if(movingTile.y > 0) {
	    		
	    		movingTile.y--;
	    	}
	    
	      break;

	    case "ArrowRight":

	    	if(movingTile.y < 10 - movingTile.size && movingTile.position !== 1 && movingTile.position !== 3) {
	    		
	    		movingTile.y++;
	    	}

	      break;

    default:
    	return;
    }
 		event.preventDefault();
	}, true);
}