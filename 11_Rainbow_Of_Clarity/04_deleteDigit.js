function deleteDigit(n) {
	
	var nAsString = n.toString();
	
	var digitDeletedNumbersArray = new Array(nAsString.length).fill(0);
	
	var part1 = "";
	var part2 = "";
	
	for(var i = 0; i < n.toString().length; i++){
		part1 = nAsString.substring(0, i);
		part2 = nAsString.substring(i + 1, nAsString.length);
		digitDeletedNumbersArray[i] = (part1 + part2);
		part1 = "";
		part2 = "";
	}
	
	console.log(digitDeletedNumbersArray);
	
	return Math.max(...digitDeletedNumbersArray);
}
