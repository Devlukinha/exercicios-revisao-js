alert("Bem - vindo a calculadora! Selecione a operação de acordo com seu número correspondente");

var calcular = 1;

while(calcular == 1) {

var opcao = Number(prompt("1 - SOMA, 2 - SUBTRAÇÃO, 3 - MULTIPICAÇÃO, 4 -DIVISÃO"));
var n1 = Number(prompt("Digite o primmeiro valor: "));
var n2 = Number(prompt("Digite o segundo valor: "));

switch(opcao) {
    case 1 :
        resultado = n1 + n2;
        break;

    case 2 :
       resultado = n1 - n2;
       break;

    case 3 :
        resultado = n1 * n2;
        break;

     case 4 :
        resultado = n1 / n2;
        break;

        default:
            alert("ERROR!! Digite uma opção que exista!");
}

alert("Resultado é " + resultado.toFixed(2));
 calcular = prompt("Para realizar outra 1, para sair digite 2");
}
