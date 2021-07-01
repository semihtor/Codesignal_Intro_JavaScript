function allLongestStrings(inputArray) {
    var uzunluklar = {};
    var arr = [];
    var wordLength = 0;
    
    for (var i = 0; i < inputArray.length; i++) {
        uzunluklar[inputArray[i]] = inputArray[i].length;
    }

    for (var keys in uzunluklar) {
        if (uzunluklar[keys] >= wordLength) {
            wordLength = uzunluklar[keys];
        }
    }

    for (var word = 0; word < inputArray.length; word++) {
        if (inputArray[word].length === wordLength) {
            arr.push(inputArray[word]);
        }
    }

    return arr;
}
