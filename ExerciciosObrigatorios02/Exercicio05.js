

// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.


function timeout() {
    let num = 10

    if (num == 10) {
        setTimeout(debounce('d', 10), 1000)
    }


}
function debounce(fn, delay) {
    console.log(' Funcao')
    console.log(' Quantidade de Delay')
}

timeout()