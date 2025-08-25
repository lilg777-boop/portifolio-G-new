let n1;
let contador=0;
let mostraresultado = document.getElementByld(`resultado`);

n1 = Number(window.prompt(`digite um número:`))

while (contador <= n1*10) {
    mostraresultado.innerHTML += `${contador},`;
    contador += n1
}