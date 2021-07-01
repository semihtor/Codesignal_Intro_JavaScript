function longestWord(string) {

    var str = string.split(/[^A-Za-z]/).filter(word => word != "");
    var longest = 0;
    var longestWord = null;
	
    for (var i = 0; i < str.length; i++) {
	
        if (longest < str[i].length) {
		
            longest = str[i].length;
            longestWord = str[i];
        }
    }
	
    return longestWord;
}
