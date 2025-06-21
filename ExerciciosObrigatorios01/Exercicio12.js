// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//     10) utilizando um loop for.


const prompt = require('prompt-sync')();

let num1 = Number(prompt("Digite a tabuado de qual número voce deseja ver: "));
let resultado = 0;



for (i = 1; i < 11; i++) {
    resultado = i * num1
    console.log(` ${num1} X ${i} = ${resultado}`)
}

