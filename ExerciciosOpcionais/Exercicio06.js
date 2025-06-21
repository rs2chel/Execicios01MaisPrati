// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.

const prompt = require('prompt-sync')();

function sortNumber() {
    let min = 1;
    let numsort = Math.floor(Math.random() * (5 - min + 1)) + min;
    return numsort;
}

let numeroSorteador = sortNumber();
let num;

do {
    num = Number(prompt('Pensei em um número entre 1 e 5, tente adivinhar: ')); // atribuir o valor digitado a num
    if (num === numeroSorteador) {
        console.log('Você acertou, parabéns!');
        break;
    } else {
        console.log('Você errou!!! Tente novamente.');
    }
} while (num !== numeroSorteador);