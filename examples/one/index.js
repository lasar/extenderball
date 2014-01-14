var EB = require('../../../extenderball');
var MyObject = new EB([
	'objects/fragment',
	'objects/another'
]);
var myInstance = new MyObject();
// Use the instance
console.log(myInstance.exampleMethod());
console.log(myInstance.anotherMethod());