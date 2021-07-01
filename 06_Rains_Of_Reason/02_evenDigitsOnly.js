function evenDigitsOnly(n) {
    
    var inputAsString = n.toString();
    var remainderSum = 0;

    for(var i = 0; i < inputAsString.length; i++){
        remainderSum += Number(inputAsString[i]) % 2;
    }

    if(remainderSum == 0){
        return true;
    }else{
        return false;
    }
}
