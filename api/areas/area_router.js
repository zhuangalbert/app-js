const {getAreas} = require("./area_controller");
const router = require("express").Router();

router.get("/", getAreas);

module.exports = router;