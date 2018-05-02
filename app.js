const argv = require('./config/yargs').argv;
const colors = require('colors')

const { getInfo } = require('./info');


getInfo(argv.direccion)
    .then(mensaje => {
        console.log('=============== TU CLIMA =============='.red)
        console.log(mensaje.Ubicacion);
        console.log('La temperatura es :', mensaje.Temp, '°');
        console.log('======================================='.red)
    })
    .catch(e => console.log(e))