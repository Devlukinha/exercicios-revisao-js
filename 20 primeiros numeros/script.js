let numero = 20;
var numeroElevado;
var soma = 0

for(let n = 1; n <= numero; n++){
    numeroElevado = Math.pow(2, n) - 1;
    console.log(numeroElevado);

    soma = soma + numeroElevado
    
 }

console.log("A soma dos valores total é " + soma);
 
