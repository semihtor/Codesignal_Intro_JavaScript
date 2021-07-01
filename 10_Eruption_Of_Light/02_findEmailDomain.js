function findEmailDomain(address) {
	
	var domainStart = address.lastIndexOf('@');
	
	console.log(address.slice(domainStart + 1, address.length));
	
	return address.slice(domainStart + 1, address.length);

}
