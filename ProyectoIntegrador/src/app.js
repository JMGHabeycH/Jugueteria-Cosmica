//Variables de entorno
require("dotenv").config();
//Express 
const express = require('express');
const app = express();
//Base de datos
const setupDB = require("../utils/db");
//Cors
const cors = require("cors");
//Method override 
const methodOverride = require('method-override');
//Puerto del servidor
const port = process.env.PORT || 3000;
//Routes
const homeRouter = require("../routes/home.routes");
const contactoRouter = require("../routes/contacto.routes");
const altaRouter = require("../routes/alta.routes");
const nosotrosRouter = require("../routes/nosotros.routes");


//seteo motor de plantilla
app.set('view engine', 'ejs');

//Seteo de metodos
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(cors());


// app.get("/",(req, res) => {
//     res.render("pages/home", {
//         title: 'Home',
//         body: 'mainPage.ejs'
//     });
// });

// app.get("/alta",(req, res) => {
//     res.render("pages/alta", {
//         title: 'Alta',
//         body: 'altaForm.ejs'
//     });
// });

// app.get("/contacto",(req, res) => {
//     res.render("pages/contacto", {
//         title: 'Contacto',
//         body: 'contactoForm.ejs'
//     });
// });

// app.get("/nosotros",(req, res) => {
//     res.render("pages/nosotros", {
//         title: 'Nosotros',
//         body: 'usText.ejs'
//     });
// });



//Validaciones de la inscripcion de productos
// const {body, validationResult} = require('express-validator');
// const {exists} = require('fs');

// app.post('/alta', [
//     body('name', 'Ingrese nombre del producto')
//         .exists()
//         .isAlpha()
//         .trim()
//         .isLength({min:2,max:30}),
//     body('price', 'Ingrese un precio valido para el producto')
//         .exists()
//         .isNumeric(),
//     body('stock', 'Ingrese una cantidad valida en stock')
//         .exists()
//         .isNumeric(),
//     body('brand', 'Ingrese la marca del producto no mayor a 40 caracteres')
//         .exists()
//         .isAlpha()
//         .trim()
//         .isLength({max:40}),
//     body('category', 'Ingrese la categoria del producto no mayor a 50 caracteres')
//         .exists()
//         .isAlpha()
//         .trim()
//         .isLength({max: 50}),
//     body('shortDescription', 'Ingrese una descripcion no mayor a 80 caracteres')
//         .exists()
//         .isAlpha()
//         .isLength({max: 80}),
//     body('longDescription', 'Ingrese una descripcion no mayor a 200 caracteres')
//         .exists()
//         .isAlpha()
//         .isLength({max: 200}),
//     body('minAge', 'Ingrese la edad minima')
//         .exists()
//         .isNumeric(),
//     body('maxAge', 'Ingrese la edad maxima')
//         .exists()
//         .isNumeric(),
//     body('prodcutImage', 'Agrege una imagen donde se pueda ver todo el prodcuto')
//         .exists()
// ], (req,res) => {
//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         res.status(400).json({errors: errors.array()});
//         console.log(errors);
//     }
// });

//Instanciamos la base de datos
setupDB();

//Uso de los router
app.use(homeRouter);
app.use("/", altaRouter);
app.use("/", contactoRouter);
app.use("/", nosotrosRouter);


app.use(express.static('public'));


app.listen(port, ()=>{
    console.log(`app escuchando en puerto ${port}`);
});

