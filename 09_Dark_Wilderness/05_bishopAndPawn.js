function bishopAndPawn(bishop, pawn) {
	
	var horizontalDiff = Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0));
	var verticalDiff = Math.abs(bishop.charAt(1) - pawn.charAt(1));
	
	console.log("hDiff: " + horizontalDiff + " / vDiff: " + verticalDiff);
	
	if(horizontalDiff == verticalDiff){
		return true;
	}else{
		return false;
	}
	
}
