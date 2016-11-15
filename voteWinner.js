function getWinner(votes) {
	var counts = {};
	for(var i = 0; i< votes.length; i++) {    
		var num = votes[i];    
		counts[num] = counts[num] ? counts[num]+1 : 1;   
	}
	var keyArr = Object.keys(counts);
	var valArr = keyArr.map(function(v) { return counts[v]; });
	var maxItem = Math.max.apply(null, valArr);
	var winnerSet = [];
	winnerSet = keyArr.filter(function(item) {
		return counts[item] == maxItem;
	});
	return winnerSet.sort()[winnerSet.length - 1];
}
