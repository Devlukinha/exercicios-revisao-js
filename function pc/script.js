

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
    console.log("Dados do computador:", pc);
    
}

function atualizaPC(pc){
    let pergunta = prompt("Deseja atualizar seu pc? Sim ou Não?");
    if(pergunta == 'Sim'){
        let atualizar = prompt("Qual peça você deseja atualizar? \nmodelo \ncpu \nram \nhd");

        if(atualizar == "modelo"){
            pc.modelo =  prompt("Qual o modelo do computador?");
        }

        else if(atualizar == "cpu"){
            pc.cpu = prompt("Qual o processador?")
        }

        else if(atualizar == "ram"){
            pc.ram = prompt("Quanto de memória de RAM ele possui?")
        }

        else if(atualizar == "hd"){
            pc.hd = prompt("Quanto de armazenamento interno ele possui?")
        }

        console.log("Dados do computador atualizado:", pc);
}
}

preencheDados(computador);
imprimeDados(computador);
atualizaPC(computador);