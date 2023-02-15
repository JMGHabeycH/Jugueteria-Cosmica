const express = require("express");
const Product = require("../models/product");
const router = express.Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

router.get("/alta",(req, res) => {
    res.render("pages/alta", {
        product: new Product(),
        title: 'Alta',
        body: 'altaForm.ejs'
    });
});

router.post("/alta", upload.single("productImage"), async (req, res) => {
    try{
        //Subida de imagen a cloudinary
        const imgcloudinary = await cloudinary.uploader.upload(req.file.path);

        //Crear nuevo producto
        let product = new Product({
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            brand: req.body.brand,
            category: req.body.category,
            shortDescription: req.body.shortDescription,
            longDescription: req.body.longDescription,
            freeShipping: req.body.freeShipping,
            minAge: req.body.minAge,
            maxAge: req.body.maxAge,
            productImage: imgcloudinary.secure_url,
            cloudinary_id: imgcloudinary.public_id,
        });

        //Guardamos producto
        await product.save();
        res.redirect("/");
    }catch(e){
        console.log(e);
    }
});

module.exports = router;



// module.exports = function(req,res,next){
//     if(req.path === '/alta'){
//         res.render("pages/alta", {
//             title: 'Alta',
//             body: 'altaForm.ejs'
//         });
//     }else{
//         next();
//     }
// }