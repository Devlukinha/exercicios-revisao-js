var repostaUsuario = Number(prompt('Quantas cartas você deseja virar?'))

const numeroCarta = Math.floor(Math.random() * 10) + 1

const naipe = ['coração', 'ouros', 'paus', 'espadas']
const naipeAleatorio = Math.floor(Math.random() * naipe.length);
const naipeSelecionado = naipe[naipeAleatorio]


