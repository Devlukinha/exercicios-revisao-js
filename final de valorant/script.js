var custoInicial = 1000;
var ingresso;
var ingressoFinal
var pessoa;
var custoFinal;

pessoa = parseInt(prompt("Quantas pessoas irão ao evento"));
for(ingresso = 150; ingresso > 0; ingresso -= 10){
    lucroTotal = (ingresso * pessoa) - 1000;

    if(custoFinal > custoInicial){
       custoInicial = custoFinal;
       ingressoFinal = ingresso;
    }

    pessoa = pessoa + 50;
}

alert("O maior lucro possivel será de R$" + custoInicial + " vendendo o ingresso a R$" + ingressoFinal);