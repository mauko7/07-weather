const {WeatherRepository} = require("../repositories/weatherRepository")
const CityRepository = require ("../repositories/cityRepository");
const logger =require("../loaders/logger/index.js");
const weatherRepo = new WeatherRepository();
const cityRepo = new CityRepository();

//ACA FILTRAMOS QUE DATA QUEREMOS QUE SALGA DE TODA LA BASE


const findWeather = async (lon,lat)=>{
    const weather = await weatherRepo.findWeather(lon,lat);
        return{
            description:weather.weather[0].description,
            temperature: weather.main.temp,
            temperatureMin:weather.main.temp_min,
            temperatureMax:weather.main.temp_max

        }
    }
const weatherByCityIdService = async (city,id)=>{
    const cities = await cityRepo.findCities(city);

    const cityData = cities.features.filter(e=>(e.id ===id))
    //logger.info(JSON.stringify(cityData))
    const lon = cityData[0].geometry.coordinates[0];//el cityData lleva un [0] porque el filter devolvio un arrary ( codigo a mejorar)
    
    const lat = cityData[0].geometry.coordinates[1];//el cityData lleva un [0] porque el filter devolvio un arrary ( codigo a mejorar)
    return await findWeather(lon,lat)
}




module.exports={
    findWeather,
    weatherByCityIdService
}