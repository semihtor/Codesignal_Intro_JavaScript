function fileNaming(names) {

	var result = [];
	var count = 0;
	var tempFileName = '';
	
	var set = new Set();
	
	names.forEach(function(item, index){
	
		if(!set.has(item)){
		
			set.add(item);
			result.push(item)
		}else{
			
			count = 0;
			++count;
			tempFileName = item+'('+(count)+')';
			
			while(set.has(tempFileName)){
				tempFileName = item+'('+(count)+')';
				count++; 
			}
			
			set.add(tempFileName);
			result.push(tempFileName);
		}
	
	});
	
	return result;
}
