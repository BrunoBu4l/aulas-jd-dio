
/**
 * Objetos
 * coleção de chave e valor
 * é dinâmico
 * Criação de Classe
 * Classe é a definição do objeto e
 * Instância é a ocorrência daquele objeto
 */

class Pessoa{
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

const vitor = new Pessoa('vitor', 25);
// vitor.nome = 'Vitor Guerra';
// vitor.idade = 25;
//console.log(vitor);
vitor.descrever();

const july = new Pessoa('july', 27);
// july.nome = 'July Ebenezer';
// july.idade = 27;
//console.log(july);
july.descrever();

//json, objeto
const pessoa = {
    nome: 'Bruno Bueno',
    idade: 27,

    descrever: function (){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

//retornando dados
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}`);
}

pessoa.descrever();

const atributo = 'idade';

console.log(pessoa[atributo]);

//pessoa.nome = 'teste'; //chamada direta
pessoa['nome'] = 'teste'; //chamada dinâmica

console.log(pessoa.nome);