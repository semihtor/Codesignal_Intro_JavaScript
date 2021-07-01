function arrayMaximalAdjacentDifference(inputArray) {
    
    var maxAdjDiff = Math.abs(inputArray[0]-inputArray[1]);
    var adjDiff = 0;
    
    for(var i = 1; i < inputArray.length; i++){
        adjDiff = Math.abs(inputArray[i]-inputArray[i+1]);
        if(adjDiff > maxAdjDiff){
            maxAdjDiff = adjDiff;
        }
    }

    return maxAdjDiff;
}
