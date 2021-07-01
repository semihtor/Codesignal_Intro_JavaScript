function digitsProduct(product) {

    var answerDigits = [];
    var answer = 0;
	
    if (product === 1) {
		// for product = 1
        return 1;
    }
	
    if (!product) {
		// for product = 0
        return 10;
    }
	
    for (var divisor = 9; divisor > 1; divisor--) {
	
        while (product % divisor === 0) {
		
            product /= divisor;
            answerDigits.push(divisor);
        }
    }
    if (product > 1) {
	
        return -1;
    }
	
    for (var i = answerDigits.length - 1; i >= 0; i--) {
	
        answer = answer + answerDigits[i] * Math.pow(10, i);
    }
	
    return answer;
}
