const {getCommodities} = require("./commodity_controller");
const {checkToken} = require("../../auth/token_validation");
const router = require("express").Router();

router.get("/", checkToken, getCommodities);

module.exports = router;