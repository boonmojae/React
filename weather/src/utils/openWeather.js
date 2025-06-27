import OpenWeather from "openweathermap-ts";

const openWeather = new OpenWeather({
  apiKey: "97390acefe08aed3b5501c9ff666ea7b"
});

openWeather.setUnits("metric");

export default openWeather;