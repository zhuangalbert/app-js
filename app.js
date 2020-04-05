require("dotenv").config()

const express = require("express");
const app = express();
const userRouter = require("./api/users/user_router");
const commodityRouter = require("./api/commodities/commodity_router");
const AreaRouter = require("./api/areas/area_router");
const SizeRouter = require("./api/sizes/size_router");

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/commodities", commodityRouter);
app.use("/api/areas", AreaRouter);
app.use("/api/sizes", SizeRouter);

app.listen(process.env.APP_PORT, () => {
    console.log("Running:", process.env.APP_PORT);
});