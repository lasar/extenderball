var AnotherFragment = function(eb, obj) {
	obj.prototype.anotherProperty = 'Crazy fox';
	obj.prototype.anotherMethod = function() {
		return this.exampleMethod()+', '+this.anotherProperty;
	};
};
module.exports = AnotherFragment;