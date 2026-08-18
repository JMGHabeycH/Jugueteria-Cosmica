const express = require("express");
const router = express.Router();
const Product = require('../models/product');


router.get("/", async (req, res) => {
    const products = await Product.find().sort({
        createAt: "desc",
    });
    res.render("pages/home", {
        products: products,
        title: 'Home',
        body: 'mainPage.ejs'
    });
});

module.exports = router;


