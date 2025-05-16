const prompt = require('prompt-sync')();

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

let nota = Number(prompt("Digite sua nota:"));
let situacao;
if (nota <= 5) {
    situacao = "reprovado";
} else if (nota > 5.1 && nota <= 6.9) {
    situacao = "recuperacao";
} else if (nota >= 7) {
    situacao = "aprovado";
}
console.log("A situação do aluno é " + situacao)