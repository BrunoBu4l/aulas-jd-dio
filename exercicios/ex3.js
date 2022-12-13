/**
 * Exercicio 3
 * 
 * calcule o que deve ser pago por um produto, considerando o preço normal e a codição de pagamento.
 * Utilize as informações abaixo par aler qual a condicçao de pagamento.
 * 
 * Código Condição de pagamento:
 *  - À vista Débito, recebe 10% de desconto;
 *  - À vista no dinheiro ou PIX, recebe 15% de desconto;
 *  - Em duas vezes no cartão, preço normal de etiqueta sem juros;
 *  - Acima de duas vezes, preço normal mais 10% de juros.
 */

const precoEtiqueta = 100;

let pagamento = 0;

let formaPag =4;

if(formaPag === 0){
    pagamento =  precoEtiqueta - (precoEtiqueta * 0.1);
}else if(formaPag === 1){
    pagamento = precoEtiqueta - ( precoEtiqueta * 0.15);
}else if(formaPag === 2){
    pagamento = precoEtiqueta;
}else if(formaPag === 3){
    pagamento = precoEtiqueta + (precoEtiqueta * 0.1);
}else{
    pagamento = 0;
}

console.log(pagamento.toFixed(2));


