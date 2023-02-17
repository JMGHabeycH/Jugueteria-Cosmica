const express = require("express");
const router = express.Router();
const Product = require("../models/product");


router.get("/nosotros", async (req, res) => {
    const products = await Product.find().sort({
        createAt: "desc",
    });
    res.render("pages/nosotros", {
        products: products,
        title: 'Nosotros',
        body: 'usText.ejs'
    });
});

module.exports = router;

