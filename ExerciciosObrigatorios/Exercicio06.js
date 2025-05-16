// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')();


let opcao;
let lado1;
let lado2;
let lado3;
let classificacao;


while (opcao != '2') {
    console.log("Digite os tres lados do triangulo")

    lado1 = Number(prompt("Primeiro lado: "))
    lado2 = Number(prompt("Segundo lado: "))
    lado3 = Number(prompt("Terceiro lado: "))

    if (lado1 < (lado2 + lado3) && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {



        if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            classificacao = 'Isósceles'
        } else if (lado1 != lado2 && lado2 != lado3) {
            classificacao = "Escaleno"
        } else if (lado1 === lado2 && lado2 === lado3) {
            classificacao = "Equilátero"
        }
        console.log(`O triangulo foi classificado como ${classificacao}`)
    } else {
        console.log(" Os lados digitados não formam um triangulo. ")
    }

    opcao = Number(prompt("Deseja ver a classificação de outro triangulo? \n 1- SIM  \n 2- NÃO \n   "))

    while (opcao !== 1 && opcao !== 2) {
        console.log("Digite uma opção válida!");
        opcao = Number(prompt("Deseja ver a classificação de outro triângulo? \n1 - SIM\n2 - NÃO\n"));
    }


}