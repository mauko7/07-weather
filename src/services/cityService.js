const CityRepository = require("../repositories/cityRepository")
const logger =require("../loaders/logger/index.js");
const repository = new CityRepository();

//ACA FILTRAMOS QUE DATA QUEREMOS QUE SALGA DE TODA LA BASE


const findCities = async (city)=>{
    const cities = await repository.findCities(city);


    return cities.features.map(e=>{
        return{
            id: e.id,
            name: e.place_name,
            lon: e.geometry.coordinates[0],
            lat: e.geometry.coordinates[1]
        }
    })

}



module.exports={
    findCities
}