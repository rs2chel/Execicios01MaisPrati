// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

function sortNumbers(num1, num2) {
    if (num1 < num2) {
        console.log(num1, num2)
    } else {
        console.log(num2, num1)
    }
}


console.log("Digite dois numeros diferentes");
let num1 = Number(prompt("Digite o primeiro valor : "));
let num2 = Number(prompt("Digite o segundo valor : "));


sortNumbers(num1, num2);

