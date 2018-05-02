const axios = require('axios');



let getData = async(address) => {

    let encodeUrl = encodeURI(address);

    let answers = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=`)

    if (answers.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay coincidencias encontradas con ${address}`);
    }

    let location = answers.data.results[0];
    let coord = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coord.lat,
        lng: coord.lng
    }

}


module.exports = {
    getData
}