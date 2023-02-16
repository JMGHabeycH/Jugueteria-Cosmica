const express = require("express");
const router = express.Router();
const Product = require("../models/product");


router.get("/contacto", async (req, res) => {
    const products = await Product.find().sort({
        createAt: "desc",
    });
    res.render("pages/contacto", {
        products: products,
        title: 'Contacto',
        body: 'contactoForm.ejs'
    });
});

module.exports = router;


