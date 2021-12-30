/* Setup */
const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

/* Part 1 */
const comandos = input.split('\n');
let posicionHorizontal = 0;
let profundidad = 0;
comandos.forEach((co) => {
    let datos = co.split(' ');
    if(datos[0] === 'forward') {
        posicionHorizontal = posicionHorizontal + parseInt(datos[1]);
    } else if(datos[0] === 'down') {
        profundidad = profundidad + parseInt(datos[1]);
    } else if(datos[0] === 'up') {
        profundidad = profundidad - parseInt(datos[1]);
    }
});
console.log('Resultado parte 1: ', posicionHorizontal * profundidad);

/* Part 2 */
const comandos_2 = input.split('\n');
let punteria_2 = 0;
let posicionHorizontal_2 = 0;
let profundidad_2 = 0;
comandos.forEach((co) => {
    let datos = co.split(' ');
    if(datos[0] === 'forward') {
        posicionHorizontal_2 = posicionHorizontal_2 + parseInt(datos[1]);
        let addProf = punteria_2 * parseInt(datos[1]);
        profundidad_2 = profundidad_2 + addProf;
    } else if(datos[0] === 'down') {
        punteria_2 = punteria_2 + parseInt(datos[1]);
    } else if(datos[0] === 'up') {
        punteria_2 = punteria_2 - parseInt(datos[1]);
    }  
});
console.log('Resultado parte 2: ', posicionHorizontal_2 * profundidad_2);