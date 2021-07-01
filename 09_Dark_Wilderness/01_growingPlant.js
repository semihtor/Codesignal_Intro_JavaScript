function growingPlant(upSpeed, downSpeed, desiredHeight) {
	
	var totalHeight = 0;
	var dayCount = 0;
	
    while(totalHeight < desiredHeight){
        dayCount++;
        totalHeight += upSpeed;
        if(totalHeight < desiredHeight){
            totalHeight -= downSpeed;
        }
    }

	return dayCount;
}
