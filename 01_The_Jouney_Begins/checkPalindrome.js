function checkPalindrome(inputString) {
    var len = inputString.length;
    var compare_string = "";
    for (var i = (len-1); i >= 0; i--) {
        compare_string += inputString[i];
    }
    if(inputString == compare_string){
        return true;
    }else{
        return false;
    }
}
