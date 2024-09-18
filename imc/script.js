function calcularImc() {
const nome = prompt("Qual seu nome?");
 
alert("Bem-vindo " + nome + " ao calculador de IMC!! Coloque . para separar gramas e centímetros");
 

const peso = parseFloat(prompt("Digite seu peso: "));
const altura = parseFloat(prompt("Digite sua altura:"));

const resultado = peso / (altura * altura);

if(resultado < 18.5 ) {
    alert(nome + " seu IMC é " + resultado.toFixed(2) + "você está com magreza!");
}

else if (resultado > 18.5 && resultado < 24.5){
    alert(nome + " seu IMC é " + resultado.toFixed(2) + " você está com peso normal!");
}

else if(resultado > 25 && resultado < 29.9){
    alert(nome + " seu IMC é " + resultado.toFixed(2) + " você está com sobrepeso!");
}

else if(resultado > 30 && resultado < 39.9){
    alert(nome + " seu IMC é " + resultado.toFixed(2) + " você está com obesidade!");
}

else if(resultado > 40){
    alert(nome + " seu IMC é " + resultado.toFixed(2) + " você está com obesidade grave!");
}
    
}

calcularImc()



    
    