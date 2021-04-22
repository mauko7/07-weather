const axios = require('axios');
const config = require("../config")
const logger = require("../loaders/logger")


class CityRepository{
    constructor(){
        
        this.limit=10;
        this.language = "es";
        this.pathBase = config.mapbox.pathBase;
        this.apiKey=config.mapbox.apikey;

        
    }

    async findCities (city){
        /*
        const url = `${this.pathBase}${city}.json?access_token=${this.apiKey}&limit=${this.limit}&language=${this.language}`;
        const response = await axios.get();
        */
       throw new Error("error de prueba")
       try {
           
        const response = await axios.get(`${this.pathBase}${city}.json?`,{
            params: {
                "access_token":this.apiKey,
                "limit":this.limit,
                "language":this.language
            },    
            });
        
            
            return response.data;

       } catch (err) {
           throw err;
       }

    }
}

module.exports = CityRepository;