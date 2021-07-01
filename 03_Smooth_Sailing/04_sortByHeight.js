function sortByHeight(a) {
    var peopleHeights = [];
    var peoplePositions = [];
    
    for(var i = 0; i < a.length; i++){
        if(a[i] !== -1){
            peopleHeights.push(a[i]);
            peoplePositions.push(i);
        }
    }
    peopleHeights.sort(function(a, b){return a - b});
    console.log(peopleHeights);
    console.log(peoplePositions);

    for(var i = 0; i < peoplePositions.length; i++){
        a[peoplePositions[i]] = peopleHeights[i];
    }
    return a;
}
