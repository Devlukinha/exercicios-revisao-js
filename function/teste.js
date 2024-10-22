const box = document.querySelector("div");
const botao = document.querySelector("button");

box.addEventListener("mouseenter", mover);
box.addEventListener("mouseout", sair)

botao.addEventListener("click", clicar);

function clicar(){
    box.style.background = "blue"
    box.style.borderRadius = "50%"
    box.style.color = "white"
    box.style.fontFamily = "Arial, sans-serif"
    box.innerText = "Viu ela se transformou!"
}

function mover(){
    box.style.background = "blue"
    box.style.borderRadius = "50%"
    box.style.color = "white"
    box.style.fontFamily = "Arial, sans-serif"
    box.innerText = "Viu ela se transformou!"
}

function sair(){
    box.style.background = "white"
    box.style.color = "black"
    box.style.fontFamily = "Arial, sans-serif"
    box.innerText = "Viu ela se transformou!"
}