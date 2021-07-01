function adjacentElementsProduct(inputArray) {
    var comparisonProduct = -1000;
    for(var i=0;i<inputArray.length-1;i++){
        if(inputArray[i]*inputArray[i+1] > comparisonProduct){
          comparisonProduct = inputArray[i]*inputArray[i+1];
        }
    }
  return comparisonProduct;
}
