// Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.


const prompt = require('prompt-sync')()
let cigarrosDia = Number(prompt("Digite a quantidade de cigarros fumados por dia:"))
let anosFumando = Number(prompt("Há quantos anos voce fuma?"))


function diasPerdidos(quantidadeCigarroDia, anosFumando) {
    let diasFumando = anosFumando * 365
    let totalCigarros = quantidadeCigarroDia * diasFumando
    let diasPerdidos = Math.floor((totalCigarros * 10) / 1440);
    console.log(`Você fumou ${quantidadeCigarroDia} cigarros por dia durante ${anosFumando} anos, e perdeu aproximadamente ${diasPerdidos} dias de vida`)

}

diasPerdidos(cigarrosDia, anosFumando)