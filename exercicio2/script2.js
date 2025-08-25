//funcao que vai somar os valores
function somar(){
    //declaracao das variaveis
    let anonascimento = 0;
    let idade = 0

    //entrada de dados pelo usuario e atribuicao nas variaveis
    anonascimento = Number(window.prompt('digite o ano do seu nascimento'));

    //ocorre um a soma dsa variaveis
    idade = 2025 - anonascimento;
    
    alert("sua idade é" + idade);
    if(idade > 18) {
        alert("voce pode fazer a carteira de motorista");
    } else {
        let dif = 18 - idade;
        alert("voce nao pode tirar carteira de motorista pois ainda faltam" + dif + "anos para completar 18")
    }

}