"use strict";
const express = require("express");
const cart = express.Router();
const pool = require("../connection/pg-connection-pool.js")

cart.get("/cart-items", (req, res) => {
    pool.query("SELECT * FROM shoppingcart ORDER BY id").then((result) => {
        res.json(result.rows);
    });
});

cart.post("/cart-items", (req, res) => {
    pool.query("INSERT INTO shoppingcart(product, price, quantity) VALUES($1::text, $2::int, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then(_ => {
        pool.query("SELECT * FROM shoppingcart ORDER BY id").then((result) => {
            res.json(result.rows);
        });
    });
});

cart.delete("/cart-items/:id", (req, res) => {
    pool.query("DELETE FROM shoppingcart WHERE id=$1::int", [req.params.id]).then(_ => {
        pool.query("SELECT * FROM shoppingcart ORDER BY id").then((result) => {
            res.json(result.rows);
        });
    });
});

cart.put("/cart-items/:id", (req, res) => {
    pool.query("UPDATE shoppingcart SET product=$1::text, price=$2::int, quantity=$3::int WHERE id=$4::int", [req.body.product, req.body.price, req.body.quantity, req.params.id]).then(_ => {
        pool.query("SELECT * FROM shoppingcart ORDER BY id").then((result) => {
            res.json(result.rows);
        });
    });
});

module.exports = cart;