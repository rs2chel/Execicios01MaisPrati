// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require("prompt-sync")();

let valor = Number(prompt("Fatoria de qual número: "))

let fat = valor;

for (i = valor; i > 1; i--) {

    if (i == valor) {
        continue
    } else {
        fat = fat * i
    }
}
console.log(`O fatorial de ${valor}, representado por ${valor}! = ${fat}`)