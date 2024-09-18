function maiorValor(){

var valor1 = Number(prompt("Digite o primeiro valor"));
var valor2 = Number(prompt("Digite o segundo valor"));
var valor3 = Number(prompt("Digite o terceiro valor"));

var maior = valor1;

if(valor2 > maior){
    maior = valor2;
}

else if ( valor3 > maior){
    maior = valor3
}

alert("O maior valor é: " + maior);
}

maiorValor()
