/**
 * -----------Anotações-------------------
 * Variáveis e Operadores
 *  = ---> operator de atribuição
 * let ou var ---> variaveis modificavéis
 * const ---> contante que não muda
 * [+] [-] [/] [*] ---> adição, subtração, divisão e multiplicação.
 * [%] --> resto
 * console.log('text0'+variavel) ---> mostrar saída de dados
 */

/**
 * Desafio 1
 * 
 * Faça um progrmama para calcular o valor de uma viagem.
 * 
 * Você terá três variaveis. Sendo elas:
 * 1 - Preço do combustivél;
 * 2 - Gasto médio de combustível;
 * 3 - distância de KM da viagem;
 */

const preCombustivel = 5.79;
const kmPorLitros = 12;
var distanciaEmKm = 1580;

const litrosComsumidos = distanciaEmKm / kmPorLitros;

const valorGasto = litrosComsumidos * preCombustivel;


console.log('media: '+valorGasto.toFixed(2));





