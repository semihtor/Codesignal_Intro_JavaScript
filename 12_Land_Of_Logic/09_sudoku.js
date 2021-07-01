function sudoku(grid) {

	var array = [];
	var square = [];

	for(var i = 0 ; i < grid.length; i++){
	
		if(grid[i].indexOf(1) == -1 || grid[i].indexOf(2) == -1 || grid[i].indexOf(3) == -1 || grid[i].indexOf(4) == -1 || grid[i].indexOf(5) == -1 || grid[i].indexOf(6) == -1 || grid[i].indexOf(7) == -1 || grid[i].indexOf(8) == -1 || grid[i].indexOf(9) == -1){
		
			return false;
		}

		array.push([]);

		for(var j = 0 ; j < grid.length; j++){
		
			array[i].push(grid[j][i]);
			
			if((i == 0 || i == 3 || i == 6) && (j == 0 || j == 3 || j == 6)){
				square.push([grid[i][j],grid[i+1][j],grid[i+2][j],grid[i][j+1],grid[i+1][j+1],grid[i+2][j+1],grid[i][j+2],grid[i+1][j+2],grid[i+2][j+2]]);
				//console.log(square[i]);
			}
		}

		if(array[i].indexOf(1) == -1 || array[i].indexOf(2) == -1 || array[i].indexOf(3) == -1 || array[i].indexOf(4) == -1 || array[i].indexOf(5) == -1 || array[i].indexOf(6) == -1 || array[i].indexOf(7) == -1 || array[i].indexOf(8) == -1 || array[i].indexOf(9) == -1){
			return false;
		}
		
		if(square[i].indexOf(1) == -1 || square[i].indexOf(2) == -1 || square[i].indexOf(3) == -1 || square[i].indexOf(4) == -1 || square[i].indexOf(5) == -1 || square[i].indexOf(6) == -1 || square[i].indexOf(7) == -1 || square[i].indexOf(8) == -1 || square[i].indexOf(9) == -1){
		
			return false;
		}
	}
	
	return true;
}
