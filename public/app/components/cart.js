"use strict";

const cart = {
    templateUrl: "app/components/cart.html",
    controller: ["CartService", function(CartService) {
        const vm = this;
        function updateCart(result) {
            vm.cart = result.data;
        };
        CartService.getAllItems().then(updateCart);
        vm.addItem = (item) => {
            CartService.addItem(item).then(updateCart);
            vm.newItem = {};
            vm.itemForm.$setPristine();
        };
        vm.removeItem = (id) => {
            CartService.removeItem(id).then(updateCart);
        };
        vm.updateItem = (updatedItem) => {
            console.log(updatedItem);
            CartService.updateItem(updatedItem).then(updateCart);
        };
    }]
};

angular.module("ShoppingCart").component("cart", cart);