const { default: axios } = require("axios");
const express = require("express");
const {v4:uuidv4}=require("uuid")
const logger = require("../loaders/logger")
const config =require("../config")
const {Succes} = require("../handler/succesHandler");
const {findWeather} = require("../services/weatherService")
const {weatherByCityIdService} = require("../services/weatherService")




//implementacion de rutas

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const weatherByCoordenates = async (req,res,next)=>{

  try {

    const {lon,lat} = req.query;
    const weather = await findWeather(lon,lat);
    const success = new Succes(weather);
    res.json(success);

  } catch (error) {
    next(error)
  }


  
}
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
 const weatherByCityId = async (req,res,next)=>{

try {
  const {city,id} = req.params;
  const weather = await weatherByCityIdService(city,id);
  const success = new Succes(weather);
  res.json(success);
} catch (error) {
  next(error)
}


  
}

module.exports={
    
    weatherByCoordenates,
    weatherByCityId

}