const {getSizes} = require("./size_controller");
const router = require("express").Router();

router.get("/", getSizes);

module.exports = router;