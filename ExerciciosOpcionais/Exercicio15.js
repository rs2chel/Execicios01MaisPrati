// 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
// final, mostre quais são os números pares que foram digitados e em que posições eles
// estão armazenados.

const prompt = require('prompt-sync')()

function numerosVetor() {
    let numeros = [];
    for (i = 0; i < 10; i++) {
        let num = Number(prompt("Digite um número:"))
        numeros.push(num)
    }
    return checkpar(numeros)
}




function checkpar(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(`O número ${arr[i]} é par e esta na posicao ${i}`)
        }
    }

}
numerosVetor()