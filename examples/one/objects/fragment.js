var ExampleFragment = function(eb, obj) {
	obj.prototype.exampleProperty = 'Lazy dog';
	obj.prototype.exampleMethod = function() {
		return this.exampleProperty;
	};
};
module.exports = ExampleFragment;