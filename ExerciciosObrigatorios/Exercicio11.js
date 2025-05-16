// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')();
let num;
let soma = 0;

for (i = 0; i < 5; i++) {
    num = Number(prompt("Digite o primeiro número: "));
    soma += num
}

console.log("Soma números é igual " + soma)