angular.module("cart", [])
.factory("cart", function(){	// creates a (singleton) service, this way it will be shared by all components
	var cartData = [];	// local, not accessible from outside
	// will return an object with 3 methods
	return{
		addProduct: function(id,name, price){
			var addedToExistingItem = false;
			for (var i=0; i < cartData.length; i++){
				if (cartData[i].id == id){
					cartData[i].count++;
					addedToExistingItem = true;
					break;
				}
			}
			if (!addedToExistingItem){
				cartData.Push({count: 1, id: id, price: price, name: name});
			}
		},
		removeProduct: function(id){
			for (var i=0; i < cartData.length; i++){
				if (cartData[i].id == id){
					cartData.splice(i,1);
					break;
				}
			}
		},
		getProducts: function(){
			return cartData;
		}
	};
})
// directives are reusable pieces, here is a custom one for cart widget:
.directive("cartSummary", function(cart){
	return{
		restrict: "E",	// means: directive can be applied as element (EA = element or attribute)
		templateUrl: "components/cart/cartSummary.html",	// URL of a partial view to use (???)
		controller: function($scope){
			var cartData = cart.getProducts();
			
			$scope.total = function(){
				var total = 0;
				for (var i=0; i < cartData.length; i++){
					total += (cartData[i].price * cartData[i].count);
				}
				return total;
			};
			
			$scope.itemCount = function(){
				var total = 0;
				for (var i=0; i < cartData.length; i++){
					total += cartData[i].count;
				}
				return total;
			};
		}
	};
});