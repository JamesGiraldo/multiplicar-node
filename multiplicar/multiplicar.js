// requireds
const fs = require('fs');
const colors = require('colors');

let listarArchivo = (base, limite = 10) => {
    console.log('======================'.green);
    console.log(`====TABLA==DEL==${ base }====`.red);
    console.log('======================'.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i}\n`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El Valor Introducido ${ base }, No Es Un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else {
                resolve(`Tabla-${ base }-al-${ limite }.text`);
            }
        });
    });
}

module.exports = {
    crearArchivo,
    listarArchivo
}