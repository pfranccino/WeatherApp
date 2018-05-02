const axios = require('axios');

let getDataWeather = async(lat, lng) => {

    let encodeLat = encodeURI(lat);
    let encodeLng = encodeURI(lng);

    let answers = await axios.get(`http://api.openweathermap.org/data/2.5/weather?&lat=${encodeLat}&lon=${encodeLng}&units=metric&appid=`)

    let datos = answers.data.main

    return {
        temp: datos.temp
    }



}


module.exports = {
    getDataWeather
}