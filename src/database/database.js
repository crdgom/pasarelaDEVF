import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    "railway",//nombre de la base
    "postgres", // nombre de usuario
    "NCZ2CrvAdTN6xkdBY9W2", // contrasena de la base
    {
        host: "containers-us-west-152.railway.app",
        port: 6283,
        dialect: "postgres" //Que motor de base se utiliza
    }
); 