let livro1 = {}

livro1.nome = prompt("Digite o nome do livro: "),
livro1.autor = prompt("Digite o nome do autor: "),
livro1.ano = parseInt(prompt("Digite o ano de publicação: "))



let livro2 = {}

livro2.nome = prompt("Digite o nome do livro: "),
livro2.autor = prompt("Digite o nome do autor: "),
livro2.ano = parseInt(prompt("Digite o ano de publicação: "))


let livroAntigo;

if(livro1.ano < livro2.ano){
    livroAntigo = livro1
    console.log(livroAntigo)
}

else if(livro1.ano > livro2.ano){
    livroAntigo = livro2
    console.log(livroAntigo)
}

if(livro1.nome == "estudando programação"){
    console.log("SIM");
}
else if(livro1.nome != "estudando programação"){
    console.log("NÃO");
}

if(livro2.nome == "estudando programação"){
    console.log("SIM");
}
else if(livro2.nome != "estudando programação"){
    console.log("NÃO");
}

if(livro1.autor == livro2.autor){
    console.log("Os dois livros são do mesmo autor!");
}

else if(livro1.autor != livro2.autor){
    console.log("Os dois livros não são do mesmo autor!");
}

console.log(livro1.autor);
console.log(livro2.autor);


