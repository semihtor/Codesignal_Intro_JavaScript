function lineEncoding(s) {

    var charCount = 1;    
    var result = '';

    for(var i=0; i < s.length; i++){

        if(s[i] === s[i+1]){

            charCount += 1;
        }else{

            result += charCount+s[i];
            charCount = 1;
        }
    }

    return result.replace(/1(?=[a-z])/g, '');
}
