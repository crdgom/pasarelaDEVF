import express from 'express';
//import rutasPieza from './routes/piezas.routes.js';
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
    const app = express(); // Inicializa el servidor
    app.use(express.json()); // Se va a comunicar atraves de JSON
    app.use(express.urlencoded({extended:false})); // Permite o no parametros
    //app.use(rutasPieza); // Se va a comunicacion
    app.listen(3000);
    console.log("El servidor esta escuchando en el puerto 3000");
}

main();


