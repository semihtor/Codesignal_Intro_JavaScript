function isLucky(n) {
    var numbers=n.toString();
    var firstHalfSum=0, secondHalfSum=0;

    for(var i = 0; i < ((numbers.length/2)); i++){
        firstHalfSum += Number(numbers.charAt(i));
    }

    for(var j = (numbers.length/2); j < numbers.length; j++){
        secondHalfSum += Number(numbers.charAt(j));
    }

    if(firstHalfSum - secondHalfSum == 0){
        return true;
    }else{
        return false;
    }
}
