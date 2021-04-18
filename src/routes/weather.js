const {Router} = require("express");
const {weatherByCoordenates,weatherByCityId} = require("../controller/weather")


const router = Router();


router.get("/",weatherByCoordenates)
router.get("/:city/:id",weatherByCityId)


module.exports=router;
