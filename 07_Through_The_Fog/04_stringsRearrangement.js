function stringsRearrangement(inputArray) {
    
    var stringLength = inputArray[0].length;

    var stringCharCodeSums = [];
    var splitStr = "";
    var individualStringSum = 0;
    var allStringSum = 0;
    
    for(var i = 0; i < inputArray.length; i++){
        for(var j = 0; j < stringLength; j++){
            splitStr = inputArray[i][j].split('');
            individualStringSum += parseInt(splitStr[j]);
        }
        stringCharCodeSums.push(individualStringSum);
    }
    
    for(var k = 0; k < stringCharCodeSums.length; k++){
        allStringSum += stringCharCodeSums[k];
    }

    if((allStringSum % 3) == 0){
        return true;
    }else{
        return false;
    }
}
