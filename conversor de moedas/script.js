let resultado;

do {
    var valorReal = parseFloat(prompt("Digite o valor em reais a ser convertido!"));

    var valoremDolar = valorReal * 0.18
    var valoremEuro = valorReal * 0.16

    alert("Valor em Dólar: " + valoremDolar.toFixed(2) + " US$.  Valor em Euro: " + valoremEuro.toFixed(2) + " €" );

    resultado = Number(prompt("Para realizar uma nova conversão digite 1, para encerrar digite 2"));
} 
while (resultado == 1)
