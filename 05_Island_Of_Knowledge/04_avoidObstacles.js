function avoidObstacles(inputArray) {
    var jump = 1;
    var condition = true;
    
    while(true) {
        condition = true;
        for(var i = 0; i < inputArray.length; i++) {
            //console.log(inputArray[i])
            if(inputArray[i] % jump === 0) {
                condition = false;
            }
        }
        if(condition === true) {
            return jump;
        }
        jump++;
    }
}
