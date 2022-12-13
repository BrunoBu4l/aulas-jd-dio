/**
 * ---------Anotações-------------
 * estruturas Condicionais
 * 
 */

const numero = 6;

const numeroPar = (numero % 2) === 0;

if (numero < 0 && numeroPar === true) {
    console.log('Número Par Negativo!');
}else if (numero < 0 && numeroPar === false ){
    console.log('Número Impar negativo!');
}else if (numero === 0){
    console.log('Número 0 é indivisível!');
}else if (numero > 0 && numeroPar === true ){
    console.log('Número Par positivo');
}else{
    console.log('Número Impar negativo');
}

/**
 * Desafio 1
 * 
 * Faça um progrmama para calcular o valor de uma viagem.
 * 
 * Você terá cinco variaveis. Sendo elas:
 * 1 - Preço do etanol;
 * 2 - Preço da gasolina;
 * 3 - Tipo de combustivel;
 * 4 - Gasto médio de combustível do carro por KM;
 * 5 - distância de KM da viagem;
 * 
 * Imprima no console o valor gasto para realizar a viagem.
 */

//variaveis
 const precoEtanol = 5.79;
 const precoGasolina = 7.89;
 const kmPorLitros = 10;
 const distanciaEmKm = 1580;
 const tipoCombustivel = 'Gasolina';

 //fórmula geral
 const litrosComsumidos = distanciaEmKm / kmPorLitros;

 if(tipoCombustivel === 'Etanol'){
    const valorEtanol = litrosComsumidos * precoEtanol;
    console.log('Média Etanol: '+valorEtanol.toFixed(2));
 }else{
    const valorGasolina = litrosComsumidos * precoGasolina;
    console.log('Média Gasolina: '+valorGasolina.toFixed(2));
 }


