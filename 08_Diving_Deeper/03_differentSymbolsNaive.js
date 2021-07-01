function differentSymbolsNaive(s) {
    splitString = s.split('');
    var distinctChar={};
    
    for(x in splitString){
        distinctChar[splitString[x]]=true;
    }
    console.log(distinctChar);
    return Object.keys(distinctChar).length;
}
