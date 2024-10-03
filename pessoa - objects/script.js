let pessoa = {}

pessoa.nome = prompt("Digite seu nome: "),
pessoa.idade = parseInt(prompt("Digite sua idade: ")),
pessoa.localizacao = prompt("Digite sua localização: ")

console.log(pessoa);

let pergunta = parseInt(prompt("Gostaria de atualizar seus dados? 1-SIM e 2-NÃO"));

if(pergunta == 1){
    let atualizarDados = parseInt(prompt("O que você gostaria de atualizar? 1-IDADE e 2-LOCALIZAÇÃO"));

    if(atualizarDados = 1){
    pessoa.idade = parseInt(prompt("Digite sua idade: "))
    console.log(pessoa.idade)
    }

    else if(atualizarDados = 2){
    pessoa.localizacao = prompt("Digite sua localização: ")
    console.log(pessoa.localizacao)
    }

    console.log(pessoa);
}

else{
    alert("Programa encerrado!")
}






