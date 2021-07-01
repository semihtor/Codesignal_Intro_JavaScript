function boxBlur(image) {
    
    var blurredImageArray = [];

    for(var y = 0; y < image.length - 2; y++){
        
        var lineArray = [];

        for(var x = 0; x < image[y].length - 2; x++){
            
            var pixelSum = 0;
            
            for(var a = y; a < y + 3; a++){
                
                for(var b = x; b < x + 3; b++){
                    
                    pixelSum += image[a][b];
                }
                // console.log(pixelSum);
            }
            
            lineArray.push(Math.floor(pixelSum/9));
        }

        blurredImageArray.push(lineArray);
    }

    return blurredImageArray;
}
