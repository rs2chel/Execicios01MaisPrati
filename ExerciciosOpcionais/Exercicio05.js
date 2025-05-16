




// Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

// pedra ganha de tesoura -> tesoura ganha de papel -> papel ganha de pedra -> 
//  (1 - 3 + 3) % 3 = 1 -> (3 - 2 + 3) %3 = 1 -> 3 + 1 +3 = 7 %3 =1
// Se der 1 o jogador venceu -> Se der 0 deu empate ->
// se der 2 o jogador perdeu 

const prompt = require('prompt-sync')()

function joKenPo(jogadaUsuario) {
    let jogadas = [{ 1: "Pedra" }, { 2: "Papel" }, { 3: "Tesoura" }]// 1= PEDRA  2= PAPEL 3= TESOURA
    let jogadapc = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    let pcMao = jogadas[jogadapc - 1][jogadapc]
    let userMao = jogadas[jogadaUsuario - 1][jogadaUsuario]

    if ((jogadaUsuario - jogadapc + 3) % 3 == 1) {

        console.log(`Jogador venceu porque ${userMao} vence  ${pcMao}`)

    } else if ((jogadaUsuario - jogadapc + 3) % 3 == 0) {

        console.log(`Empate os dois colocaram ${userMao}`)

    } else {
        console.log(`Você perdeu porque ${pcMao} vence  ${userMao}`)
    }
}


let mao = Number(prompt("Vamos jogar JOKENPO: \n Escolha: \n 1- PEDRA \n 2 -PAPEL \n 3- TESOURA \n..."))

joKenPo(mao)