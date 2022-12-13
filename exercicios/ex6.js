/**
 * Exercicios sobre arrays
 */

//faça um laço para imprimir uma tabuada

let num = 3;

for(let i= 1; i <= 10; i++){
    tab = num * i;
    //console.log(tab);
}

//percorrer uma lista e imprimir os números pares

const listNumber = [1,8,9,3,5,4,6,7];

for (let i = 0; i < listNumber.length; i++) {
    const num = listNumber[i]
    if(num%2 === 0){
        //console.log(num);
    }
    
    
}

//const numerosPares = [];

const numeros = [];

for (let i = 0; i < 10; i++) {
    numeros.push(i);
}

//console.log(numeros);

const numerosPares = [];

for (let i = 0; i < 10; i = i + 2) {
    numerosPares.push(i);
}

//console.log(numerosPares);

const listaDeValores = [1, 2, 3, 4, 5];
const valor = listaDeValores[2];
console.log(valor);