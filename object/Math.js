
// INFO: min"以上"、max"以下"
Math.randRange = function(min, max) {
	return Math.floor(Math.random()*(max-min+1)+min);
};
