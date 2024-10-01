let nomes = [];
let notas = [];
let media = 0.0;
let i = 0;

for(i = 0; i < 5; i++){
   nomes [i] = prompt("Digite o nome do aluno");
   notas [i] = Number(prompt("Digite a nota do aluno"));

   media = media + notas[i];

}

media = media / 5;

for(i = 0; i < 5; i++){
    if(notas[i] < media){
        alert(`${nomes[i]} está abaixo da média, com ${notas[i]}`)
    }
}

