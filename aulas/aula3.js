/**
 * Funções
 * (function (){}()); -->função imediatamente invocada, cria e se executa.
 */



//incrementar Juros
function incrementarjuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarjuros(100, 10));

//funções para o IMC
function calcularImc(peso, altura){
    return peso / (Math.pow(altura, 2));
}

function classificarImc(imc){
    if(imc < 18.5){
        return 'Abaixo do peso';
    }else if (imc >=18.5 && imc <25){
        return 'Peso normal';
    }else if(imc >=25 && imc < 30){
        return 'Acima do peso';
    }else if(imc >=30 && imc <40){
        return 'Obeso';
    }else{
        return 'Obesidade Grave';
    }
}

//código do programa principal
function main(){
    const peso = 67;
    const altura = 1.63;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}


main();