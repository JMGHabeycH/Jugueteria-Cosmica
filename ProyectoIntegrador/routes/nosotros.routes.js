const express = require("express");
const router = express.Router();


router.get("/nosotros",(req, res) => {
    res.render("pages/nosotros", {
        title: 'Nosotros',
        body: 'usText.ejs'
    });
});

module.exports = router;

