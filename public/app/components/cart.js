"use strict";

const cart = {
    template: `<section class="list-container">
    <section class="item" ng-repeat="item in $ctrl.cart">
    <p>{{item.product}}</p>
    <p>{{item.price | currency}}</p>
    <p>Qty: {{item.quantity}}</p></section></section>`,
    controller: ["CartService", function(CartService) {
        const vm = this;
        CartService.getAllItems().then((response) => {
            console.log(response.data);
            vm.cart = response.data;
        });
    }]
};

angular.module("ShoppingCart").component("cart", cart);