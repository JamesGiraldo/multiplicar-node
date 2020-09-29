const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime En Consola La Tabla de Multiplicar', opts)
    .command('crear', 'Genera Un archivo con La Tabla de Multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}