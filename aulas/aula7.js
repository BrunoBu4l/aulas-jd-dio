/**
 * Import e Export
 * 
 * mocked = mocado === simulação, simular uma leitura 
 * 
 * Export em funcoes-auxiliares7
 * 
 * const nome = pessoa.nome === const { nome } = pessoa ->são equivalentes
 */

//importando métodos e destruturando objetos
const { gets, print} = require('./funcoes-auxiliares7');

const numSort = [];

for (let i = 0; i < 5; i++) {
    const nums = gets();
    numSort.push(nums);
}

let maiorValor = 0;

for (let i = 0; i < numSort.length; i++) {
    const nums = numSort[i];
    if(nums > maiorValor){
        maiorValor = nums;
    }
    
}

print(maiorValor);


