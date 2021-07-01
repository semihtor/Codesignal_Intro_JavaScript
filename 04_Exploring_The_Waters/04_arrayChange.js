function arrayChange(inputArray) {
  
var moveCounter = 0;
  
  for(var i = 1; i < inputArray.length; i++) {
    if(inputArray[i] <= inputArray[i-1]) {
      var diff = (inputArray[i - 1] - inputArray[i]) + 1;
      inputArray[i]+= diff;
      moveCounter+= diff;
    }
  }
  return moveCounter;
}
