/* Setup */
const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

/* Part 1 */
const numberList = input.split('\n').map(Number);
let cambios = 0;
let numeroPrev = 0;
numberList.forEach((l) => {
    if(numeroPrev !== 0) {
        if(l > numeroPrev) {
            cambios++;
        }
    }
    numeroPrev = l;
});
console.log('Resultado de la parte 1:', cambios);

/* Part 2 */
const numberListB = input.split('\n').map(Number);
let listaVentanas = [];
let cambiosB = 0;
let numeroPrevB = 0;
numberListB.forEach((l, i) => {
    if(numeroPrevB !== 0) {
        if(i + 2 <= numberListB.length - 1) {
            let numero = l + numberListB[i+1] + numberListB[i+2];
            if(numero > numeroPrevB) {
                cambiosB++;
            }
            numeroPrevB = numero;
        }

    } else {
        numeroPrevB = l + numberListB[i+1] + numberListB[i+2];
    }
});
console.log('Resultado de la parte 2: ', cambiosB);


