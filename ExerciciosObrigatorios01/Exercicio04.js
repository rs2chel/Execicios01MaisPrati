const prompt = require('prompt-sync')();


// Menu interativo no console escolha de três opções. Utilizando switch-case para implementar a lógica de cada opção selecionada.

let opcao;
let num1;
let num2;
let resultado;


while (opcao != 5) {
    console.log(" MENU CALCULADORA \n  1-somar  \n 2-Subtrair \n 3- Multiplicar \n 4- Dividir \n 5- Sair")
    opcao = Number(prompt("Escolha a opção desejada:  "))
    if (opcao != 5) {
        num1 = Number(prompt("Digite o primeiro número: "))
        num2 = Number(prompt("Digite o segundo número: "))

    } else {
        break
    }


    switch (opcao) {
        case 1: resultado = num1 + num2
            break;
        case 2: resultado = num1 - num2
            break;
        case 3: resultado = num1 * num2
            break;
        case 4: resultado = num1 / num2
            break;
    }
    console.log("O resultado da operação é  " + resultado)
}