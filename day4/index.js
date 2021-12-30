/* Setup */
const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, './input_pru.txt'), 'utf8');

const datos = input.split('\r\n');
/* Part 1 */
const datos_1 = datos.slice(); // Creamos una copia de los datos
const numeros = datos_1[0];
console.log('Numeros: ', numeros);
datos_1.shift();
datos_1.shift();
const tableros = datos_1.filter(x => x !== '');
// datos_1.forEach((e, i) => {

// });
console.log('tableros: ',tableros.length);
crearCarton(tableros, tableros.length / 5);
function crearCarton(lista, numero) {

    let numCarton = 1;
    let cartones = [];
    for (let i = 0; i < numero; i++) {
  
        let carton = [];
        let inicio = (numCarton * 5) - 5;
        let listaTemp = lista.splice(inicio, inicio + 5);
        listaTemp.forEach((element) => {
            let valores = element.replace('  ', ' ').split(' ');
            let fila = [];
            valores.forEach((v) => {
                fila.push(v);
            });
            carton.push(fila);
        });
        cartones.push(carton);
        console.table(cartones[0]);
        numCarton++;
    }
 
}



