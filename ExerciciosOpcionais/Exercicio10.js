
// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.

const prompt = require('prompt-sync')()

function resultadoTela(numeros, estatistica) {
    console.log(`
        Estatistica dos valores:
        Valores: ${numeros}
        Total de números adicionados: ${estatistica['total']}
        A soma dos valores: ${estatistica['soma']}
        O menor número digitado foi: ${estatistica['menor']}
        O maior número digitado foi: ${estatistica['maior']}
        A media dos valores é: ${estatistica['media']}
        Total de números pares é: ${estatistica['pares']}

        `)
};


function calculos(numeros) {
    let estatistica = {
        'total': numeros.length,
        'soma': 0,
        'menor': numeros[0],
        'maior': numeros[0],
        'media': 0,
        'pares': 0,

    }
    numeros.forEach(numero => {
        estatistica['soma'] += numero

        if (numero < estatistica['menor']) {

            estatistica['menor'] = numero

        }
        if (numero > estatistica['maior']) {
            estatistica['maior'] = numero
        }
        if (numero % 2 == 0) {
            estatistica['pares']++
        }

    })

    estatistica['media'] = estatistica['soma'] / estatistica['total']

    return resultadoTela(numeros, estatistica);
};



function menu() {
    let opcao = 0;
    let numeros = [];

    while (opcao != 2) {
        let num;
        do {
            num = Number(prompt('Digite um número: '));
            if (isNaN(num)) {
                console.log('Valor inválido! Digite um número válido.');
            }
        } while (isNaN(num));

        numeros.push(num);

        do {
            opcao = Number(prompt('Você deseja adicionar mais números?\n1 - SIM\n2 - NÃO'));
            if (opcao !== 1 && opcao !== 2) {
                console.log('Escolha 1 para SIM ou 2 para NÃO.');
            }

        } while (opcao !== 1 && opcao !== 2);
    }

    calculos(numeros);
}






menu()