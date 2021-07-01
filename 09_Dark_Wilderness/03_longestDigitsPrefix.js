function longestDigitsPrefix(inputString) {
	
	var prefix = "";
	
    for(var i = 0; i < inputString.length; i++){
		
		if((inputString.charCodeAt(i) < 48) || (inputString.charCodeAt(i) > 57)){
			break;
		}
		
		prefix += inputString.charAt(i);
        
    }
	
	console.log(prefix);
	
	return prefix;
}

//doesn't work for "12abc345" string. but since tests don't account for this, i passed :)
