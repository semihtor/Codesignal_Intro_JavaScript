function firstDigit(inputString) {
    for(i = 0; i < inputString.length; i++){
        var charCode = inputString.charCodeAt(i);
        
        if((47 < charCode) && (charCode < 58)){
            return inputString.charAt(i);
        }
    }
}
