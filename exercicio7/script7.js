let mostraResultado = document.querySelector("#resultado");
let cliques = 0;



function inscrever() {
    cliques +=1;
    times = parseInt(cliques);

mostraResultado.innerHTML =`<p>Número de clíques: ${cliques}. </p> `;

if(times >=10){
    alert(" (◕‿◕)");
}
}

function zerar() {
    cliques = 0;
    mostraResultado.innerHTML =`<p>Número de clíques: ${cliques}. </p> `;
}