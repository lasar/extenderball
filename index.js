var path = require('path');

var ExtenderBall = function(paths) {
	var obj = this.createObj(paths);
	return obj;
};

ExtenderBall.prototype.createObj = function(paths) {
	var obj = function() {
		for(var i in this.init) {
			this.init[i](this);
		}
	};
	obj.prototype.init = [];
	obj.prototype.ebPaths = [];

	obj.prototype.getEBPaths = function() {
		return this.ebPaths;
	};

	obj.extend = function(filePath) {
		if('undefined'===typeof window) { filePath = path.resolve(filePath); }
		obj.prototype.ebPaths.push(filePath);
		var Extender = require(filePath);
		Extender(this, obj);
	};

	var filePath;
	for(var p in paths) {
		filePath = paths[p];
		if('undefined'===typeof window) { filePath = path.resolve(filePath); }
		this.extend(obj, filePath);
	}
	return obj;
};

ExtenderBall.prototype.extend = function(obj, filePath) {
	obj.prototype.ebPaths.push(filePath);
	var Extender = require(filePath);
	Extender(this, obj);
};

module.exports = ExtenderBall;
