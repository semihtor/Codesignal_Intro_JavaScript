function sumUpNumbers(inputString) {
	
	const regexForNonNumber = new RegExp(/(\d)/);
    var numbersInArray = inputString.split(/(\D)/).filter(word => regexForNonNumber.test(word));
	
	if(numbersInArray.length == 0){
		
		return 0;
	}else{
	
		for(var i = 0; i < numbersInArray.length; i++){
			
			numbersInArray[i] = parseInt(numbersInArray[i]);
		}
	}
	
	console.log("array length: " + numbersInArray.length);
	console.log("array elements: " + numbersInArray);
	console.log("array elements sum: " + numbersInArray.reduce((a,b) => a + b, 0));
	console.log("\n");
	
	return numbersInArray.reduce((a,b) => a + b, 0)

}
