import express from 'express';
import rutasCard from './routes/card.routes.js';
//import { sequelize } from './database/database.js';

function main(){
    //Manejo de excepciones
    /*try{
        await sequelize.sync({force:false});
        await sequelize.authenticate();
        console.log("Conexion exitosa");
    }catch(error){
        console.log("Conexion fallida, error -> "+error);
    }*/
    const app = express();
    app.use(express.json()); 
    app.use(express.urlencoded({extended:false})); 
    app.use(rutasCard); 
    app.listen(3000);
    console.log("El servidor esta escuchando en el puerto 3000");
}

main();


