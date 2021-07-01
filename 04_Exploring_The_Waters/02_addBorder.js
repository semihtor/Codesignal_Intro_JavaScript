function addBorder(picture) {
    var stringLengths = [];
    var borderString = "";

    for(var i = 0; i < picture.length; i++){
        stringLengths.push(picture[i].length);
    }

    var maxStringLength = Math.max.apply(null, stringLengths)

    for(var i = 0; i < picture.length; i++){
        picture[i] = "*"+picture[i]+"*";
    }

    for(i = 0; i < (maxStringLength + 2); i++){
        borderString += "*";
    }

    picture.unshift(borderString);
    picture.push(borderString);
    return picture;
}
