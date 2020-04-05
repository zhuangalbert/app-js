const {createUser,login, getProfile} = require("./user_controller");
const {checkToken} = require("../../auth/token_validation");
const router = require("express").Router();

router.post("/", createUser);
router.post("/login", login);
router.get("/profile", checkToken, getProfile);

module.exports = router;