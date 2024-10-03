let lista = [1,2,3,4,5,6,7,8,9,10,11];
let valorIntervalo = parseInt(prompt("Digite o valor do intervalo "));
let resultado = [];

for(let i = 0; i < lista.length; i++){
    if(lista[i] <= valorIntervalo){
        resultado.push(`Indice ${i}, Valor ${lista[i]}`);
    }
}

if(resultado.length > 0){
    alert('Valores dentro do intervalo:\n ' + resultado.join("\n"));
}
else{
    alert('Nenhum valor foi encontrado :(');
}