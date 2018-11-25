"use strict";
function CartService($http) {
    const self = this;
    self.getAllItems = () => {
        return $http({
            url: "/cart-items",
            method: "GET",
        });
    };  
    self.addItem = (item) => {
        return $http({
            url: "/cart-items",
            method: "POST",
            data: item
        });
    };
    self.removeItem = (id) => {
        return $http({
            url: `/cart-items/${id}`,
            method: "DELETE",
        });
    };
    self.updateItem = (item) => {
        return $http({
            url: `/cart-items/${item.id}`,
            method: "PUT",
            data: item
        });
    };
}

angular.module("ShoppingCart").service("CartService", CartService);