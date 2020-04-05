const jwt = require("jsonwebtoken");

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      token = token.slice(7);
      jwt.verify(token, process.env.API_SECRET, (err, decoded) => {
        if (err) {
          return res.status(400).json({
            message: "Invalid Token"
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }
  }
};