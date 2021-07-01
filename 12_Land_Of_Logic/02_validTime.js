function validTime(time) {

    var timeAsArray = time.split(/:/).filter(word => word != ":");
	
    if(timeAsArray.length != 2 || (timeAsArray[0].length != 2 && timeAsArray[1].length != 2)){
		return false;
	}
	if(timeAsArray[0] > 23 || timeAsArray[1] > 59){
		return false;
	}
    
	return true;
}
