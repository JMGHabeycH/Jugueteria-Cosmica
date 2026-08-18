// Mongodb connection

const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const setupDB = async ()=>{
    try{
        await mongoose
            .connect(process.env.MONGODB_URI);
        console.log('Conectado con MongoDB Atlas');
            
    }catch(error){
        console.log(error);
    }
};

module.exports = setupDB;