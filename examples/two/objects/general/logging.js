var GeneralLogging = function(eb, obj) {
	obj.prototype.log = function() {
		if(arguments.length>1) {
			console.log('['+arguments[0]+'] '+arguments[1]);
		} else {
			console.log('[LOG] '+arguments[0]);
		}
	};
};
module.exports = GeneralLogging;