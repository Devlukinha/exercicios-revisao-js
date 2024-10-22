let computador = {
    modelo: "",
    cpu: "",
    ram: "",
    hd: ""
}

function preencheDados(pc){
    pc.modelo = prompt("Qual o modelo do computador?")
    pc.cpu = prompt("Qual o processador?")
    pc.ram = prompt("Quanto de memória de RAM ele possui?")
    pc.hd = prompt("Quanto de armazenamento interno ele possui?")
}

function imprimeDados(pc){
    console.log(computador);
    
}

function atualizaPC(pc, peca){
    let pergunta = prompt("Deseja atualizar seu pc? Sim ou Não?");
    if(pergunta == 'Sim'){
        let atualizar = prompt("Qual peça você deseja atualizar?");

        if(atualizar == "modelo"){
            peca.modelo =  prompt("Qual o modelo do computador?");
        }

        else if(atualizar == "cpu"){
            peca.cpu = prompt("Qual o processador?")
        }

        else if(atualizar == "ram"){
            peca.ram = prompt("Quanto de memória de RAM ele possui?")
        }

        else if(atualizar == "hd"){
            peca.hd = prompt("Quanto de armazenamento interno ele possui?")
        }

        console.log(computador);
        
}
}

preencheDados(computador);
imprimeDados(computador);
atualizaPC(computador);
/*

function lerValores(){
    let num1 = Number(prompt("Digite o primeiro valor: "));
    let num2 = Number(prompt("Digite o segundo valor: "));
    let num3 = Number(prompt("Digite o terceiro valor: "));
    
    media = num1 + num2 + num3 / 3;

    alert(`A média é ${media.toFixed(2)}`);
}

lerValores();

for(let i = 0; i < 5; i++){
    lerValores()
}
    */