//Variables de entorno
require("dotenv").config();
//Express 
const express = require('express');
const app = express();
//Base de datos
const setupDB = require("../utils/db");
//Cors
const cors = require("cors");
//Compression
const compression = require("compression");
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
app.set('view cache', true);

//Seteo de metodos
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(cors());

app.use(compression());
//Instanciamos la base de datos
setupDB().then(() => {
    app.listen(port, () => {
        console.log(`app escuchando en puerto ${port}`);
    });
});

//Uso de los router
app.use(homeRouter);
app.use("/", altaRouter);
app.use("/", contactoRouter);
app.use("/", nosotrosRouter);


app.use(express.static('public', {maxAge: '1d'}));




