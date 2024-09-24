let numero = 1

let multiplicacao = 1

let resultado

while(multiplicacao <= 10){
    while(numero < 10){
        resultado = numero * multiplicacao;
        console.log(resultado);
        
        numero++;
    }

    multiplicacao++;
    numero = 1;
}