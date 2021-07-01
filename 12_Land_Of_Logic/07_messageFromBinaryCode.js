function messageFromBinaryCode(code) {
	
	var eightBitArray = code.match(/.{1,8}/g);
	var resultString = "";
	
	for(var i = 0; i < eightBitArray.length; i++){
		
		resultString += String.fromCharCode(parseInt(eightBitArray[i], 2));
	}
	
	console.log(resultString);
	return resultString;
}
