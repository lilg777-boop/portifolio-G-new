let aleatorio = parseInt(Math.random() * 101);
mostraResultado = document.querySelector("#resultado");
jogador;

function pensar() {
jogador = Number(window.prompt("Digite um numero de 1 a 100"));

if (jogador != aleatorio) {

    if(jogador > aleatorio) {
        mostraResultado.innerHTML += `<p>Você errou, tente um número MENOR que ${jogador}!</p>`;
    } else {
        mostraResultado.innerHTML += `<p>Você errou, tente um número MAIOR que ${jogador}!</p>`;
    }
} else {
     mostraResultado.innerHTML += `<p><b>Parabéns! Você acertou o número ${aleatorio}.</b></p>`;
    }
    let 
}