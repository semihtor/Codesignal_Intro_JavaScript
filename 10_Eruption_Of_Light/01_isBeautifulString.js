function isBeautifulString(inputString) {

	var letterCount = new Array(26).fill(0);
	
	for(var i = 0; i < inputString.length; i++){
	
		letterCount[inputString[i].charCodeAt() - 97]++;
		
	}
	
	for(var i = 1; i < letterCount.length; i++){
	
		if(letterCount[i] > letterCount[i-1]){
			
			console.log("false");
			return false;
		}
	}
	
	console.log("true")
	return true;
}
