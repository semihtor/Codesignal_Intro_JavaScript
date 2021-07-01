function spiralNumbers(n) {

    var result = new Array(n).fill().map(() => new Array(n).fill('')); // create empty n x n array
    var counter = 1;
    var startColumn = 0;
    var endColumn = n - 1;
    var startRow = 0;
    var endRow = n - 1;
	
    while (startColumn <= endColumn && startRow <= endRow) {
	
        for (var i = startColumn; i <= endColumn; i++) {
		
            result[startRow][i] = counter;
            counter++;
        }
		
        startRow++;
		
        for (var j = startRow; j <= endRow; j++) {
		
            result[j][endColumn] = counter;
            counter++;
        }

        endColumn--;

        for (var i = endColumn; i >= startColumn; i--) {
		
            result[endRow][i] = counter;
            counter++;
        }

        endRow--;
		
        for (var i = endRow; i >= startRow; i--) {
		
            result[i][startColumn] = counter;
            counter++;
        }

        startColumn++;
    }

	console.log(result);
    return result;
}
