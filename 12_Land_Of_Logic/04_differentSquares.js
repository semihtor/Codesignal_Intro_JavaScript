function differentSquares(matrix) {

	var squares = {},
	result = 0;
	
	for (var i = 1; i < matrix.length; i++) {
		
		var row = matrix[i];
		
		for (var j = 1; j < row.length; j++) {
			
			var square = [
			matrix[i - 1][j - 1],
			matrix[i - 1][j],
			matrix[i][j - 1],
			matrix[i][j]
			];
			
			if(!squares[square]){
				result++;
			}
			
			squares[square] = true;
		}
	}
	
	return result;
}
