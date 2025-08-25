let mostraResultado = document.querySelector("#resultado");
let inscritos = 0;

function inscrever() {
    inscritos +=1;
    times = parseInt(inscritos / 4);

mostraResultado.innerHTML =`<p>Número de inscritos: ${inscritos}. </p> `;

if(times >= 4){
    alert("Já é possível iniciar o campeonato, pois temos 4 equipes!");
}
}