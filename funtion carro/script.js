let carro = {
    ligado: false,
    velocidade: 0,
};

function darPartida() {
    if (!carro.ligado) {
        carro.ligado = true;
        console.log("Carro ligado.");
    } else {
        console.log("O carro já está ligado.");
    }
}

function acelerar() {
    if (carro.ligado) {
        carro.velocidade += 10;
        console.log(`Acelerando... Velocidade atual: ${carro.velocidade} km/h`);
    } else {
        console.log("O carro está desligado. Ligue o carro primeiro.");
    }
}

function diminuirVelocidade() {
    if (carro.ligado) {
        carro.velocidade = Math.max(0, carro.velocidade - 10);
        console.log(`Diminuindo a velocidade... Velocidade atual: ${carro.velocidade} km/h`);
    } else {
        console.log("O carro está desligado. Ligue o carro primeiro.");
    }
}

function desligarCarro() {
    if (carro.ligado && carro.velocidade === 0) {
        carro.ligado = false;
        console.log("Carro desligado.");
    } else if (carro.velocidade > 0) {
        console.log("O carro deve estar parado para ser desligado.");
    } else {
        console.log("O carro já está desligado.");
    }
}

function estadoAtual() {
    let marcha;
    if (carro.velocidade >= 10 && carro.velocidade <= 20) {
        marcha = 1;
    } else if (carro.velocidade >= 21 && carro.velocidade <= 30) {
        marcha = 2;
    } else if (carro.velocidade >= 31 && carro.velocidade <= 40) {
        marcha = 3;
    } else if (carro.velocidade >= 41 && carro.velocidade <= 60) {
        marcha = 4;
    } else if (carro.velocidade > 60) {
        marcha = 5;
    } else {
        marcha = 0; 
    }
    console.log(`Velocidade atual: ${carro.velocidade} km/h, Marcha: ${marcha}`);
}

function menu() {
    while (true) {
        let opcao = prompt("Escolha uma opção:\n1. Dar partida\n2. Acelerar\n3. Diminuir velocidade\n4. Desligar carro\n5. Estado atual\n6. Sair");

        switch (opcao) {
            case '1':
                darPartida();
                break;
            case '2':
                acelerar();
                break;
            case '3':
                diminuirVelocidade();
                break;
            case '4':
                desligarCarro();
                break;
            case '5':
                estadoAtual();
                break;
            case '6':
                console.log("Saindo...");
                return;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

menu();