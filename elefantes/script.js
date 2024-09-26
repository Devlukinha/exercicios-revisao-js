var quantidadeElefante = Number(prompt("Digite a quantidade de elefantes que há no ambiente: "));

let repeticao;

for(repeticao = 1; repeticao <= quantidadeElefante; repeticao++){
        
    if(repeticao == 1){
       alert(repeticao + " elefante incomoda muita gente, " +(repeticao + 1)+ " elefantes incomodam muito mais!");
    }
   else{
     alert(repeticao + " elefantes incomoda muita gente, " +(repeticao + 1)+ " elefantes incomodam muito mais!");
   }
      
}

// repetição recebe o valor 1 para dar inicio: "1 elefante incomoda muita gente"
// repetição devera ser menor ou igual a qunatidadeElefante
// se a repetiçao for igual (== 1), imprima na tela o primeiro valor da repetição("1 elefante incomoda muita gente")
// depois na mesma linha pegue o valor inicial da repetiçã (1) e some mais 1 de acordo com a qunatidade de elefantes
// exemplo: quantidadeElefante for 5, repetição começara com 1 normalmente e depois somará mais 1
// 1 elefante incomoda muita gente + repetiçao + 1: ficara: 2 elefantes incomodam muito mais! 
