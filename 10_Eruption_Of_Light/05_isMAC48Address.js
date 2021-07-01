function isMAC48Address(inputString) {
	
	var inputArray = inputString.split('-');
	var trueCount = 0;
	
	if(inputArray.length != 6){
		
		return false;
	}
	
	for(var i = 0; i < inputArray.length; i++){
		
		if(inputArray[i].length != 2){
			
			return false;
		}
		
		if(((inputArray[i].charCodeAt(0) > 47 && inputArray[i].charCodeAt(0) < 58)  || (inputArray[i].charCodeAt(0) > 64 && inputArray[i].charCodeAt(0) < 71)) && ((inputArray[i].charCodeAt(1) > 47 && inputArray[i].charCodeAt(1) < 58)  || (inputArray[i].charCodeAt(1) > 64 && inputArray[i].charCodeAt(1) < 71))){
			
		}else{
		
		    return false;
		}
		
	}

    return true;

}
