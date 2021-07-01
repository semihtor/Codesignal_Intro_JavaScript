function alternatingSums(a) {
    
    var firstTeamWeight = 0;
    var secondTeamWeight = 0;

    for(var i = 0; i < a.length; i++){
        if (i % 2 == 0) {
            firstTeamWeight+=a[i];
        }else{
            secondTeamWeight+=a[i];
        }
    }

    return [firstTeamWeight, secondTeamWeight]
}
