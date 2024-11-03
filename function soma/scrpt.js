let num1 = Number(prompt("Digite o primeiro numero: "));
let num2 = Number(prompt("Digite o segundo numero: "));
let operador = prompt("Escolha a operacao que deseja fazer: \nAdicao \nSubtracao \nMultplicacao \nDivisao");

switch(operador){
    case "Adicao":
        alert(somar(num1, num2));
        
        break;
    case "Subtracao":
        alert(subtrair(num1, num2));
        break;

    case "Multplicacao":
        alert(multplicar(num1, num2));
        break;

    case "Divisao":
        alert(dividir(num1, num2));
        break;
}


function somar(num1, num2){
    return num1 + num2;
}
function subtrair(num1, num2){
    return num1 - num2;
}
function multplicar(num1, num2){
    return num1 * num2;
}
function dividir(num1, num2){
    return num1 / num2;
}