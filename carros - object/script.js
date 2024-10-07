let repeticao;
let carros = []

do {
let carro = {}

carro.marca = prompt("Digite a marca do carro: ");
carro.modelo = prompt("Digite o modelo do carro: ");
carro.ano = parseInt(prompt("Digite o ano do carro: "));
carro.valor = parseFloat(prompt("Digite o valor do carro: "));

carros.push(carro);

 repeticao = Number(prompt("Gostaria de cadastrar um novo carro? Digite 1-SIM ou 2-NÄO "));
}
while(repeticao === 1)
    if(carros.length > 0){
        let carroMaisCaro = carros.reduce((max, carro) => (carro.valor > max.valor ? carro : max));
        alert(`O carro mais caro é: \nMarca: ${carroMaisCaro.marca}\nModelo: ${carroMaisCaro.modelo}\nAno: ${carroMaisCaro.ano}\nValor: ${carroMaisCaro.valor}`);
        
    }
    else{
        alert(`Nenhum carro cadastrado`);
    }
