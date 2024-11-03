function converterMoeda(valorReais, cotacao, nomeMoeda){
    let valorConvertido = valorReais / cotacao;

    console.log(`R$ ${valorReais.toFixed(2)} vale ${valorConvertido.toFixed(2)} em ${nomeMoeda}`);
}

let valorEmReais = parseFloat(prompt("Digite o valor em reais: "));
let valorCotacao = parseFloat(prompt("Digite o valor da cotacao:"));
let nomedaMoeda = prompt("Digite o nome da moeda que deseja: ");

converterMoeda(valorEmReais, valorCotacao, nomedaMoeda);