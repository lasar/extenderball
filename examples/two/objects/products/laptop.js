var ProductsLaptop = function(eb, obj) {
	obj.prototype.batteryLife = null;
	obj.prototype.productName = null;
	obj.prototype.getBatteryLife = function() {
		// Get data for `this.productId` from database
		return '8 hours';
	};
};
module.exports = ProductsLaptop;