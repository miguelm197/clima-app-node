const { default: Axios } = require("axios");

const getLugarLatLng = async (direccion)=>{
    
    const encodeUrl = encodeURI(direccion);

    const resp = await Axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: encodeUrl,
          appid: "97bd48046f6b59304b0d14ab39bf93c9",
          units: "metric",
        },
      });

    return {
        direccion,
        lat: resp.data.coord.lat,
        lng: resp.data.coord.lon
   }
   
}



module.exports = {
    getLugarLatLng
}

