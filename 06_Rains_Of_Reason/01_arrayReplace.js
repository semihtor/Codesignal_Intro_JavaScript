function arrayReplace(inputArray, elemToReplace, substitutionElem) {

    var outputArray = [];

    for(var i = 0; i < inputArray.length; i++){
        
        if(inputArray[i] == elemToReplace){

            inputArray[i] = substitutionElem;
        }
    }

    return inputArray;
}
