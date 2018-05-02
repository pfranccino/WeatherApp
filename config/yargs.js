const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Con esta opciones podremos agregar la direccion que queremos saber el clima',
            demand: true
        }
    })
    .help()
    .argv


module.exports = {
    argv
}