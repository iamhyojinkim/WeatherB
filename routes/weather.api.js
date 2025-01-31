const express = require("express");
const router = express.Router();
const weatherController = require("../controller/weather.controller");

router.post("/", weatherController.searchWeather); //create
router.get("/", weatherController.getWeather); //read
router.put("/:id", weatherController.updateWeather); //update
router.delete("/:id", weatherController.deleteWeather);

module.exports = router;
