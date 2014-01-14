// Include the module
var EB = require('../../../extenderball'); // usually just 'extenderball' if you have installed the module
// Create an object with a name (only used for debugging) and an array of paths to the fragments.
var MyObject = new EB([
	'objects/general/logging',
	'objects/products/default',
	'objects/products/laptop'
]);
// Create a new instance
var myInstance = new MyObject();
// Use the instance
myInstance.log('Hello'); // from objects/general/logging
myInstance.loadProduct(123); // from objects/products/default
myInstance.log('Product Name', myInstance.getProductName()); // from objects/products/default
myInstance.log('Battery Life', myInstance.getBatteryLife()); // from objects/products/laptop