let numero = Number(prompt("Digite um número: "));

let fatorial = 1;
let calcular = 1;

while( calcular <= numero){
    fatorial = fatorial * calcular;
    calcular++;
}

alert(fatorial);