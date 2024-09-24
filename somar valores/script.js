
let numero;
let resultado = 0;

do {

     numero = Number(prompt("Digite um numero"));

    resultado = numero + resultado;
}

while(numero != 0);

alert(resultado);