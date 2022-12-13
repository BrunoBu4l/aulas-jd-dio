/**
 * Exercicio 2
 * 
 * Faça um IMC(índice de Massa Corporal)
 * 
 * fórmula:
 * IMC = peso / (altura *altura)
 * 
 * separe nas seguintes condições (em adultos):
 * abaixo de 18.5 - abaixo do peso;
 * entre 18.5 e 25 - peso normal
 * entre 25 e 30 - acimado peso
 * entre 30 e 40 - obeso
 * acima de 40 - obesidade grave
 * 
 */

const peso = 150;
const altura = 1.63;
const imc = peso / (altura * altura);

if(imc < 18.5){
    console.log("Abaixo do peso");
}else if (imc >=18.5 && imc <25){
    console.log("Peso normal");
}else if(imc >=25 && imc < 30){
    console.log("Acima do peso");
}else if(imc >=30 && imc <40){
    console.log("Obeso");
}else{
    console.log("Obesidade Grave");
}