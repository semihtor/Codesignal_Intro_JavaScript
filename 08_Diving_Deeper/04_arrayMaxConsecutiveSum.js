function arrayMaxConsecutiveSum(inputArray, k) {

	var max = 0;	
	
    for(var i = 0; i <= inputArray.length - k; i++){
		var sum = inputArray[i];
		
		for(var j = 1; j < k; j++)
			sum += inputArray[i + j];		
		
		if(sum > max)
			max = sum;
	}
	
	return max;
}
