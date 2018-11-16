"use strict";
const express = require("express");
const cart = express.Router();

const cartItems = [{
        id: 0,
        product: "Roast Beef Sandwich Bath Soak",
        price: 19.95,
        quantity: 5
    },
    {
        id: 1,
        product: "Crafting with Cat Hair",
        price: 12.48,
        quantity: 1
    },
    {
        id: 2,
        product: "Emergency Beard Guards",
        price: 7.78,
        quantity: 3
    },
    {
        id: 3,
        product: "How to Tell If Your Cat Is Plotting to Kill You",
        price: 11.68,
        quantity: 1,
    },
    {
        id: 4,
        product: "Lobster Claw Oven Mitts",
        price: 20.00,
        quantity: 2
    }
];


cart.get("/cart-items", (req, res) => {
    res.json(cartItems);
});

cart.post("/cart-items", (req, res) => {
    console.log(req.body);
});

cart.delete("/cart-items/:id", (req, res) => {
    console.log(req.params.id);
});

cart.put("/cart-items/:id", (req, res) => {
    console.log(req.params.id);
});

module.exports = cart;