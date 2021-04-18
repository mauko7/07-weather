const {Router} = require("express");
const {cities} = require("../controller/cities")


const router = Router();

router.get("/:city",cities);




module.exports=router;
