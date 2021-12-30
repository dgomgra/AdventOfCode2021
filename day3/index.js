/* Setup */
const fs = require('fs');
const path = require('path');
const { kill } = require('process');
const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

/* Part 1 */
const datos = input.split('\n');
const array0 = [];
const array1 = [];
inicio = true;
datos.forEach((d) => {
    let num = d.split('\r')
    let num2 = num[0].split('');
    if(inicio) {
        for (let j = 0; j < num2.length; j++) {
            array0.push(0);
            array1.push(0);  
        }
        inicio = false;
    }
    for (let i = 0; i < num2.length; i++) {
        let val = num2[i];
        if(val === '0') {
            array0[i] = array0[i] + 1;
        } else {
            array1[i] = array1[i] + 1;
        }
        
    }

});
let tasaGamma = '';
let tasaEpsilon = '';
for (let i = 0; i < array0.length; i++) {
   let val0 = array0[i];
   let val1 = array1[i];
    if(val0 > val1) {
        tasaGamma = tasaGamma + '0';
        tasaEpsilon = tasaEpsilon + '1';
   } else {
        tasaGamma = tasaGamma + '1';
        tasaEpsilon = tasaEpsilon + '0';
   }
    
}
console.log('TasaGamma', parseInt(tasaGamma, 2));
console.log('TasaEpsilon:', parseInt(tasaEpsilon, 2));
console.log('Resultado parte 1: ', parseInt(tasaGamma, 2) * parseInt(tasaEpsilon, 2));

/* Parte 2 */
// const datos = input.split('\n');
part2();
function part2() {
    let generadorOxigeno = parseInt(getGeneradorOxigeno(datos, 0, 'GO'), 2);
    console.log('Generador de Oxigeno:', generadorOxigeno);
    let depuradorCO2 = parseInt(getGeneradorOxigeno(datos, 0, 'DC'), 2);
    console.log('Generador de Oxigeno:', depuradorCO2);
    console.log('Solución parte 2:', generadorOxigeno * depuradorCO2);
}

function getGeneradorOxigeno (lista, indice, dato) {
    let lista1 = [];
    let lista0 = [];

    lista.forEach((element) => {
        let caracteres = element.split('');
        if(caracteres[indice] === '0') {
            lista0.push(element)
        } else {
            lista1.push(element)
        }
    });

    if(dato === 'GO') {
        if(lista1.length >= lista0.length) {
            if(lista1.length === 1) {
                return lista1;
            } else {
                return getGeneradorOxigeno(lista1, indice + 1, dato);
            }
        } else {
            if(lista0.length === 1) {
                return lista0;
            } else {
                return getGeneradorOxigeno(lista0, indice + 1, dato);
            }
        }
    } else {
        if(lista0.length <= lista1.length) {
            if(lista0.length === 1) {
                return lista0;
            } else {
                return getGeneradorOxigeno(lista0, indice + 1, dato);
            }
        } else {
            if(lista1.length === 1) {
                return lista1;
            } else {
                return getGeneradorOxigeno(lista1, indice + 1, dato);
            }
        }
    }
}


