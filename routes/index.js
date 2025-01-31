const express = require("express");
const router = express.Router();
const weatherApi = require("./weather.api");
const cors = require("cors");
router.use(cors());

router.use("/weather", weatherApi);
module.exports = router;
