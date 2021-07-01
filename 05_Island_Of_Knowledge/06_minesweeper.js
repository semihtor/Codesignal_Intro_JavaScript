function minesweeper(matrix) {

    var mineCount = [];

    for(var i = 0; i < matrix.length; i++){

        mineCount.push([]);
        for(var j = 0; j < matrix[i].length; j++){
            mineCount[i][j] = 0;
            //above 
            if(matrix[i][j - 1] === true){
                mineCount[i][j]++;
            }
            //below
            if(matrix[i][j + 1] !== undefined){
                if(matrix[i][j + 1] === true){
                    mineCount[i][j]++;
                }
            }
            //left
            if(matrix[i - 1] !== undefined){
                if(matrix[i - 1][j] === true){
                    mineCount[i][j]++;
                }
            }
            if(matrix[i + 1] !== undefined){
            //right
                if(matrix[i + 1][j] === true){
                    mineCount[i][j]++
                }
            }
            //down right
            if(matrix[i + 1] !== undefined){
                if (matrix[i + 1][j + 1] === true){
                    mineCount[i][j]++;
                }
            }
            //down left
            if(matrix[i + 1] !== undefined){
                if (matrix[i + 1][j - 1] === true){
                    mineCount[i][j]++;
                }
            }
            //top right
            if(matrix[i - 1] !== undefined){
                if (matrix[i - 1][j + 1] === true){
                    mineCount[i][j]++;
                }
            }
            //top left
            if(matrix[i - 1] !== undefined){
                if (matrix[i - 1][j - 1] === true){
                    mineCount[i][j]++;
                }
            }
        }
    }
    return mineCount;
    
    
}
