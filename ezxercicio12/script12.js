let mostraHTMl = document.getElementByld("resultado");

function tabuada() {
    let numero = prompt("Digite um número para calcular a tabuada.");
    let contador =1;

    mostraHTMl.innerHTML = `<p><b>TABUADA</b></p>`;
    while (contador <= 10) {
        mostraHTMl.innerHTML += `${numero} x ${contador} = ${numero*contador}<br>`;
        contador++;
    }
}