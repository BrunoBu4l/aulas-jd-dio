/**
 * Exercicio 1
 * Faça 3 variaveis que receba 3 notas;
 * calcule a média
 * exiba a classificação conforme abaixo
 * 
 * media = (nota1 + nota2 + nota3) / 3;
 * 
 * classificação:
 * media < 5, reprovado,
 * media entre 5 e 7, recuperação,
 * media > 7, passou de semestre;
 */

const nota1 = 1;
const nota2 = 8;
const nota3 = 2;

const media = (nota1 + nota2 + nota3)/3;

if(media < 5){
    console.log('Sua nota foi '+media.toFixed(2)+', portanto está reprovado!');
}else if(media >=5 && media <=7){
    console.log('Sua nota foi '+media.toFixed(2)+', portanto está em recuperação!');
}else{
    console.log('Sua nota foi '+media.toFixed(2)+', portanto está aprovado!');
}