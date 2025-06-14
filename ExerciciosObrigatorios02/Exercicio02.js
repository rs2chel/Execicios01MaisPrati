// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
const prompt = require('prompt-sync')();


function SorteNumber() {
    let numSorte = Math.floor(Math.random() * 100)

    return numSorte

}

function guessNumber() {
    let numSorte = SorteNumber()
    let numUser;
    let tentativas = 0
    console.log(numSorte)
    do {
        numUser = Number(prompt('Tente acertar o número entre 1 e 100:'))
        tentativas++
        if (numUser > numSorte) {
            console.log('Mais Baixo...')
        } else if (numUser < numSorte)
            console.log('Mais Alto...')
        else {
            console.log(`Parabens voce acertou em ${tentativas} tentativas`)
        }
        console.log(numSorte)
    } while (numUser != numSorte)


}


guessNumber()