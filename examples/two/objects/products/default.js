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