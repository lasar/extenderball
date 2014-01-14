# extenderball

A work in progress. The idea is to assemble objects from multiple, flexibly combinable object fragments.

## Installation

It will be in npm soon.

## Basic usage example

`index.js`:

```javascript
// Include the module
var EB = require('extenderball');
// Create an object with a name (only used for debugging) and an array of paths to the fragments.
var MyObject = new EB('SomeName', [
	'objects/general/logging',
	'objects/products/default',
	'objects/products/laptop'
]);
// Create a new instance
var myInstace = new MyObject();
// Use the instance
myInstance.log('Hello'); // from objects/general/logging
myInstance.loadProduct(123); // from objects/products/default
myInstance.log('Weight', myInstance.getBatteryLife()); // from objects/products/laptop
```

Then we define the object fragments. The main function always gets passed the EB object as the first, the new object as the second argument.

`objects/general/logging`: Functions for logging.

```javascript
var GeneralLogging = function(eb, obj) {
	obj.prototype.log = function() {
		if(arguments.length>1) {
			console.log('['+this.getEBName()+':'+arguments[0]+'] '+arguments[1]);
		} else {
			console.log('['+this.getEBName()+'] '+arguments[0]);
		}
	};
};
module.exports = GeneralLogging;
```

`objects/products/default`: Default code to handle a product

```javascript
var ProductsDefault = function(eb, obj) {
	obj.prototype.productId = null;
	obj.prototype.productName = null;
	obj.prototype.loadProduct = function(productId) {
		this.productId = productId;
		// Add code to fetch product from the database here.
		this.productName = 'Generic product';
	};
	obj.prototype.getProductId = function() {
		return this.productId;
	};
	obj.prototype.getProductName = function() {
		return this.productName;
	};
};
module.exports = ProductsDefault;
```

`objects/products/laptop`:

```javascript
var ProductsLaptop = function(eb, obj) {
	obj.prototype.batteryLife = null;
	obj.prototype.productName = null;
	obj.prototype.getBatteryLife = function() {
		// Get data for `this.productId` from database
		return '8 hours';
	};
};
module.exports = ProductsLaptop;
```