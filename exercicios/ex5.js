/**
 * Exercicios aula 5
 * 1- crie uma classe carro
 * 2- possui marca, cor e gasto médio/km
 * 3- crie um metodo onde a qtd em km e o preço retorne o valor gasto em R$.
 */

class Carro{
    marca;
    cor;
    gastoPorKm;

    constructor(marca, cor, gastoPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    calcularGasto(distancia, precoCombustivel){
        return distancia * this.gastoPorKm * precoCombustivel;
    }

    descrever(){
        console.log(`Meu carro da ${this.marca} com a ${this.cor} gasta em média ${this.gastoPorKm} por Km`);
    }
}

const uno = new Carro('Fiat', 'branco', 1/12);

console.log(uno.calcularGasto(70,5));

const palio = new Carro('Fiat', 'preto', 1/10);

console.log(palio.calcularGasto(70,5));

/**
 * Exercicios aula 5
 * 1- crie uma classe pessoa
 * 2- possui nome, peso, altura
 * 3- 
 */

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / Math.pow(this.altura,2);
    }

    classificarImc(){
        const imc = this.calcularImc();
        if(imc < 18.5){
            return ("Abaixo do peso");
        }else if (imc >=18.5 && imc <25){
            return ("Peso normal");
        }else if(imc >=25 && imc < 30){
            return ("Acima do peso");
        }else if(imc >=30 && imc <40){
            return ("Obeso");
        }else{
            return ("Obesidade Grave");
        }
    }
}

const jose = new Pessoa('jose', 70, 1.75);
console.log('O IMC de josé é: '+jose.calcularImc());
console.log(jose.classificarImc());

const bruno= new Pessoa('Bruno', 67, 1.63);
console.log('O IMC de Bruno é: '+bruno.calcularImc());
console.log(bruno.classificarImc());
const dev = {
    nome: 'Renan',
    linguagemPreferida: 'JavaScript'
};

console.log(dev.linguagemPreferida);