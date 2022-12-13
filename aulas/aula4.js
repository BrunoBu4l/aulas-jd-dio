/**
 * Funções
 * 
 * 
 */

function escreverNome(nome){
    return nome;
}

function verificarIdade(idade){
    if(idade >= 18){
        console.log('Meu nome é '+escreverNome('Bruno') + ' e sou adulto!');
    }else{
        console.log('Meu nome é '+escreverNome('Bruno') +' e não sou adulto!');
    }
}

verificarIdade(18);

const precoEtiqueta = 100;
const formaPag = 4;

function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros/100)));
}

if(formaPag === 0){
    console.log(aplicarDesconto(precoEtiqueta, 10));
}else if(formaPag === 1){
    console.log(aplicarDesconto(precoEtiqueta, 15));
}else if(formaPag === 2){
    console.log(precoEtiqueta);
}else if(formaPag === 3){
    console.log(aplicarJuros(precoEtiqueta, 10));
}else{
    console.log('ERRO!!');
}

function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
}

console.log(calcularMedia(5, 5));

console.log(incrementarJuros(100,10));