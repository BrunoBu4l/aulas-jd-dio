/**
 * exemplo da aula 5
 */

class Pessoa {
    nome;
    idade;
    anoNascimento;

    //torna as variaveis obrigatórias
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
    }

    //função
    descrever() {
        console.log(`meu nome é ${this.nome} e tenho ${this.idade} anos! Eu nasci no ano de ${this.anoNascimento}`);
    }
}

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velha que ${p2.nome}`);
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velha que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade!`);
    }
}

const vitor = new Pessoa('Vitor', 25);
const bruno = new Pessoa('Bruno', 27);
const jully = new Pessoa('Jully', 27);

compararPessoas(vitor, bruno);
compararPessoas(vitor, jully);
compararPessoas(jully, bruno);
function descreverPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}; Idade: ${pessoa.idade};`);
}

const renan = new Pessoa('Renan', 30);
console.log(descreverPessoa(renan));
new Pessoa('Renan', 30).descrever();