
// INFO: min"以上"、max"以下"
Math.prototype.randRange = function(min, max) {
	return Math.floor(Math.random()*(max-min+1)+min);
};
