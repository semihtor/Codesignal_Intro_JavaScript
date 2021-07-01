function absoluteValuesSumMinimization(a) {
    
    var resultArray = [];
    var sum = 0;
    
    for (var i = 0; i < a.length; i++){
        for (var j = 0; j < a.length; j++){

             sum += Math.abs(a[j]-a[i])
        }

        resultArray.push(sum);
        sum = 0;
    }

    return a[resultArray.indexOf(Math.min(...resultArray))];
}
