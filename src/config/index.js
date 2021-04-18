//CARGAMOS LAS PROPIEDADES DE AMBIENTES QUE SE SACAN DEL .ENV


const dotenv = require("dotenv");

const envFound = dotenv.config();
//validacion de que este el .env en los archivos
if(!envFound){
    throw new Error("Could not find .env file");
};
//validacion del entorno
process.env.NODE_ENV = process.env.NODE_ENV ||"development";

module.exports ={
    port:process.env.PORT,
    api:{
        prefix:"/api/v1"
    },
    log:{
        level: process.env.LOG_LEVEL
    },
    swagger:{
        path:"/documentation"
    },
    mapbox:{
        pathBase:"https://api.mapbox.com/geocoding/v5/mapbox.places/",
        apikey:process.env.MAPBOX_API_KEY
    },
    openweathermap:{
        pathbase:"https://api.openweathermap.org/data/2.5/weather?",
        apikey:process.env.OPENWEATHERMAP_API_KEY
    }
}