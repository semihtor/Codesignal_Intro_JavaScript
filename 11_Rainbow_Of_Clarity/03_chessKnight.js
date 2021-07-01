function chessKnight(cell) {
	
	var cellHorizontal = cell.charCodeAt(0) - 96;
	var cellVertical = parseInt(cell.charAt(1));
	
	var possiblePositions = 0;
	
	if(cellHorizontal + 2 < 9 && cellVertical + 1 < 9){
	
		possiblePositions += 1;
	}
	if(cellHorizontal + 1 < 9 && cellVertical + 2 < 9){
		
		possiblePositions += 1;
	}
	if(cellHorizontal - 2 > 0 && cellVertical + 1 < 9){
	
		possiblePositions += 1;
	}
	if(cellHorizontal - 1 > 0 && cellVertical + 2 < 9){
	
		possiblePositions += 1;
	}
	if(cellHorizontal + 2 < 9 && cellVertical - 1 > 0){
	
		possiblePositions += 1;
	}
	if(cellHorizontal + 1 < 9 && cellVertical - 2 > 0){
	
		possiblePositions += 1;
	}
	if(cellHorizontal - 2 > 0 && cellVertical - 1 > 0){
	
		possiblePositions += 1;
	}
	if(cellHorizontal - 1 > 0 && cellVertical - 2 > 0){
	
		possiblePositions += 1;
	}
	
	console.log(possiblePositions);
	return possiblePositions;
}
