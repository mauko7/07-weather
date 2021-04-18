const { default: axios } = require("axios");
const express = require("express");
const {v4:uuidv4}=require("uuid")
const logger = require("../loaders/logger")
const config =require("../config")
const {Succes} = require("../handler/succesHandler");
const {findCities} = require ("../services/cityService")





//implementacion de rutas



/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const cities=async(req,res)=>{
  
  const city =req.params.city;
  const cities = await findCities(city);//Tiene 2 partes, va a buscar a capa servicios donde filtra que info quiere y esa a su vez busca en repository
  const succes = new Succes(cities);  //este objeto hace que se devuelva todo en un fortmato determinado (handler)

  res.json(succes);
  
  
};


module.exports={
    cities,
    

}