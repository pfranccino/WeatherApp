const { getData } = require('./apiGoogle/location');

const { getDataWeather } = require('./apiWeather/weather');



let getInfo = async(direccion) => {

    let coord = await getData(direccion);
    let temp = await getDataWeather(coord.lat, coord.lng);

    return {
        Ubicacion: coord.direccion,
        Temp: temp.temp
    }
}


module.exports = {
    getInfo
}