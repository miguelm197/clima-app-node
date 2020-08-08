const { default: Axios } = require("axios");

const getClima = async (lat, lng) => {

  const resp = await Axios.get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      lat: lat,
      lon: lng,
      appid: "97bd48046f6b59304b0d14ab39bf93c9",
      units: "metric",
    },
  });

  return resp.data.main.temp;
};

module.exports = {
  getClima,
};
