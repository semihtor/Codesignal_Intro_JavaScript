function extractEachKth(inputArray, k) {
    
    if(k == 1){
        return [];
    }

    if(inputArray.length < k){
        return inputArray;
    }else{
        for(var i = 1; i < inputArray.length; i++){
            inputArray.splice(((k-1)*i), 1);
        }
    }
    return inputArray;
}


