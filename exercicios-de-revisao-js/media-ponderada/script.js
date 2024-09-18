function mediaPonderada() {

const n1 = parseFloat(prompt("Digite a primeira nota: "));
const p1 = parseFloat(prompt("Digite o peso da primeira nota: "));

const n2 = parseFloat(prompt("Digite a segunda nota: "));
const p2 = parseFloat(prompt("Digite o peso da segunda nota: "));

const n3 = parseFloat(prompt("Digite a terceira nota: "));
const p3 = parseFloat(prompt("Digite o peso da terceira nota: "));

const resultado = (n1 + n2 + n3) / (p1 + p2 + p3);

alert("O resultado é " + resultado.toFixed(2));

}

mediaPonderada()