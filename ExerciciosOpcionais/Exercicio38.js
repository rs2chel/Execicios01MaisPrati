// // Exercício 38

// 38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
// variável identificadora que calcule a operação conforme a informação contida nesta
// variável:
// 1- soma dos elementos;
// 2- produto dos elementos;
// 3- média dos elementos;
// 4- ordene os elementos em ordem crescente;
// 5- mostre o vetor.
const prompt = require('prompt-sync')()



function lerVetor() {
    const vetor = []
    let num;
    for (i = 0; i < 6; i++) {
        num = Number(prompt('Digite um numero:'))
        vetor.push(num)
    }
    lerOpcao(vetor)
}

function dadosVetor(vetor, opcao) {
    console.log(opcao)
    switch (opcao) {

        case 1: // soma dos elementos
            return vetor.reduce((acc, val) => acc + val, 0);

        case 2: // produto dos elementos
            return vetor.reduce((acc, val) => acc * val, 1);

        case 3: // média dos elementos
            const soma = vetor.reduce((acc, val) => acc + val, 0);
            return soma / vetor.length;

        case 4: // ordenar em ordem crescente
            return [...vetor].sort((a, b) => a - b);

        case 5: // mostrar vetor (retorna como está)
            return vetor;

        default:
            return "Operação inválida";
    }
}
function lerOpcao(vetor) {
    let opcao = 1
    do {
        console.log(`
        Opções:
            1- Soma 
            2- Produto
            3- Media
            4- order em ordem crescente
            6- Sair
            `)
        opcao = Number(prompt(' Escolha qual dado voce deseja do vetor:'))
        if (opcao >= 1 && opcao <= 5) {
            const resultado = dadosVetor(vetor, opcao);
            console.log("Resultado:", resultado);
        } else if (opcao !== 6) {
            console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== 6);
    console.log("Programa encerrado.");
}

lerVetor()