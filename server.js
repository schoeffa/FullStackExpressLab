"use strict";
const express = require("express");
const app = express();
const cart = require("./cart.js");
const port = 3000;

app.use(express.static("./public"));
app.use(express.json());
app.use("/", cart);

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
});