function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {

    var yourStrongest = Math.max(yourLeft, yourRight);
    var yourWeakest = Math.min(yourLeft, yourRight);
    var friendsStrongest = Math.max(friendsLeft, friendsRight);
    var friendsWeakest = Math.min(friendsLeft, friendsRight);

    if(yourStrongest == friendsStrongest && yourWeakest == friendsWeakest){
        return true;
    }else{
        return false;
    }
}
