function areSimilar(a, b) {
    var diff=[];
    for (var i=0;i<a.length;i++){
        if (a[i]!=b[i]){
            diff.push(i);
        }
    }
    if(diff.length==0){
        return true;
    }else{
        if (diff.length==1||diff.length>2){
            return false;
        }else{
            if ((a[diff[0]]==b[diff[1]])&&(a[diff[1]]==b[diff[0]])){
                return true;
            }else{
                return false;
            }
        }
    }
}
