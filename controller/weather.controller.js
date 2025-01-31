const Weather = require("../model/Weather");
const weatherController = {};

//getWeather??

weatherController.searchWeather = async (req, res) => {
  const { city } = req.body;
  try {
    const newWeather = new Weather({
      city,
    });
    await newWeather.save();
    res.status(200).json({ status: "ok", data: newWeather });
  } catch (error) {
    res.status(404).json({ status: "fail :(" });
  }
};
weatherController.getWeather = async (req, res) => {
  try {
    const currentSearchWeather = await Weather.find({});
    res.status(200).json({ status: "ok", data: currentSearchWeather });
  } catch (error) {
    res.status(404).json({ status: "fail :(", error: error.message });
  }
};

weatherController.updateWeather = async (req, res) => {
  try {
    const updatedWeather = await Weather.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedWeather) {
      return res.status(404).json({ message: "not found" });
    }

    res.status(200).json({ status: "ok", data: updatedWeather });
  } catch (error) {
    res.status(404).json({ status: "fail :(", error: error.message });
  }
};

weatherController.deleteWeather = async (req, res) => {
  try {
    const deletedWeather = await Weather.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "ok", data: deletedWeather });
  } catch (error) {
    res.status(404).json({ status: "fail :(", error: error.message });
  }
};

module.exports = weatherController;
