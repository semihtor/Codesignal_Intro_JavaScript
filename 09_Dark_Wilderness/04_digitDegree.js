function digitDegree(n){
	
	var degree = 0;
	n = n.toString();
	
	while(n.length > 1){
		n = Array.from(n).reduce((a, b) => parseInt(a) + parseInt(b)).toString();
		degree++;
	}
	
	console.log(degree);
	
	return degree;
}
