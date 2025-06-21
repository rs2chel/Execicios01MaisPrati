// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')();

let opcao;
let soma = 0;
let media = 0;

let arr = [];

while (opcao != 0) {
    opcao = Number(prompt("Digite um número ou 0 para sair  "));
    if (opcao != 0) {
        soma += opcao
        arr.push(opcao)

    } else {
        media = soma / (arr.length)
    }
}

console.log(` Os números digitados foram ${arr}`)
console.log(`A quantidade de algoritmos somados foram ${arr.length}`)
console.log(`A soma dos algoritmos é ${soma} `)
console.log(`A media dos algoritmos é  ${media}`)
