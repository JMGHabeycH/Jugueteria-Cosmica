const express = require("express");
const router = express.Router();


router.get("/contacto",(req, res) => {
    res.render("pages/contacto", {
        title: 'Contacto',
        body: 'contactoForm.ejs'
    });
});

module.exports = router;


