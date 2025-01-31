const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weatherSchema = Schema({
  city: {
    type: String,
    required: true,
  },
});

const Weather = mongoose.model("Weather", weatherSchema);
module.exports = Weather;
