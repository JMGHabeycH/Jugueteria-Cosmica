// Mongodb connection

const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const setupDB = async ()=>{
    try{
        mongoose
            .connect(process.env.MONGODB_URI)
            .then((dataBase) => console.log(`Conectado con MongoDB Atlas a ${dataBase.connection.host}`))
            .catch((error) => console.log(error));
    }catch(error){
        return null;
    }
};

module.exports = setupDB;