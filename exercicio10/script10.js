function contar() {
    let mostraResultado = document.getElementById(`resultado`);

    mostraResultado.innerHTML = `<p><b> Contando de 1 até 10<p><b>`
    
    let contador = 1;

    while (contador <= 10){
        let numero =contador % 2;

        if  (numero == 0) {
            mostraResultado.innerHTML += `<mark>${contador}<mark/> &#10040;`;
        } else {
            mostraResultado.innerHTML += `${contador}&#10040;`;
        }
        contador+=1;
    }
}