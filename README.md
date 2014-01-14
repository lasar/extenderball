# extenderball

A work in progress. The idea is to assemble objects from multiple, flexibly combinable object fragments.

## Basic usage example:

`index.js`: Define the new object, create an instance and use it.

```javascript
var EB = require('extenderball');
var MyObject = new EB('SomeName', [
	'objects/general/logging',
	'objects/products/default',
	'objects/products/laptop'
]);
var myInstace = new MyObject();
myInstance.log('Hello');
myInstance.loadProduct(123);
myInstance.log('Weight', myInstance.getBatteryLife());
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