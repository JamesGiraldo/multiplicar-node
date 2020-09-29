const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado:`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no encontrado');
}

// tabla de multiplicar
// let base = 4;

// console.log( process.argv );
// let argv2 = process.argv;
// console.log(argv.base);
// console.log('limite' + ' ' + argv.limite);
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(multiplicar);
// crearArchivo(base)
//       .then( archivo => console.log(`Archivo Creado ${ archivo}`))
//       .catch( err => console.log(err));