function palindromeRearranging(inputString) {
    
    var strObj = {};
    if(inputString.length === 1) {
      return true;
    }
    var inputToArr = inputString.split('');
    
    for(var i = 0; i < inputToArr.length; i++) {
      if(strObj.hasOwnProperty(inputToArr[i]) === false){
        strObj[inputToArr[i]] = 1
        continue;
      }
      strObj[inputToArr[i]]++
    }
    
   var oddCount = 0;
   for(var prop in strObj) {
     
    if(strObj[prop] % 2 === 1) {
      oddCount++
    }
   }
   
  if(oddCount >= 2) {
    return false
  } else {
    return true
  }
}
