function alphabeticShift(inputString) {
    
    var outputString = "";
    var shiftValue = 1;
    
    for(let i=0;i<inputString.length;i++){
        
        replacementCharacter = String.fromCharCode(((inputString.charCodeAt(i) - 97 + shiftValue) % 26) + 97);

        // console.log(String.fromCharCode(inputString.charCodeAt(i)) + " yerine " + replacementCharacter + ",");
        
        outputString += replacementCharacter;
    }

    return outputString;
}
