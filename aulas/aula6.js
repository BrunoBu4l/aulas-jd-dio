/**
 * Aula 6
 * Arrays
 */

const alunos = ['Bruno', 'Jully', 'Tom'];

//adicionar aluno no array
alunos.push('Alice');

//ou
alunos[4] = 'Takira';

//console.log(alunos);

//remove último elemento da lista
alunos.pop()

//remove o primeiro elemento da lista
alunos.shift();

//console.log(alunos);

/////////////////////////////////////////////////////
//aray vazio de notas
const notas = [];

//acrescendando notas
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(7);
notas.push(6);
notas.push(8);

//variavel de soma
let soma = 0;

//laço de repetição
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

//variavel para média final
const media = soma / notas.length;


console.log( media);




