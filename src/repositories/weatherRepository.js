const axios = require('axios');
const config = require("../config")
const logger = require("../loaders/logger")


class WeatherRepository{
    constructor(){
        this.units="metric";
        this.lang="es";
        this.pathBase=config.openweathermap.pathbase;
        this.appid=config.openweathermap.apikey;
    }

    async findWeather(lon,lat){
        try {
            
            const instance = axios.create({
                baseURL:`${this.pathBase}`,
                params:{
                    "lat":lat,
                    "lon":lon,
                    "appid":this.appid,
                    "units":this.units,
                    "lang":this.lang
                    
                }
            })

            const response = await instance.get();
            //logger.silly(JSON.stringify(response.data))
            
            return response.data;
            
        } catch (err) {
            logger.silly(`eTE${err}`)
            
            throw err
        }
    }
}

module.exports={
    WeatherRepository
}


