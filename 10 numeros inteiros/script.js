let numeros = [];
let i = 0;

for(i = 0; i <=10; i++){
    numeros[i] = parseInt(prompt("Digite um numero: "));
}

for(i = 0; i <= 10; i++){
    if(numeros[i] < 0){
        alert(`O vetor ${i} negativo`);
    }
}

