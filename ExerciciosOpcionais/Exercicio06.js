// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.


function sortNumber(num) {
    let min = 1
    let numsort = Math.floor(Math.random() * (num - min + 1)) + min
    return numsort
}


let numeroSorteador = sortNumber(5)