// // Exercício 33
// 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
// elementos da diagonal principal com a média dos elementos da diagonal secundária

function gerarMatriz() {
    let matriz = []
    let numero;
    for (let i = 0; i < 3; i++) {
        let linha = []
        for (let j = 0; j < 3; j++) {
            numero = Math.floor(Math.random() * 100)
            linha.push(numero)
        }
        matriz.push(linha)
    }

    transformarMatriz(matriz)
}
// [1, 2, 3]   i=0 j=0
// [1, 2, 3]    i=1 j=1
// [1, 2, 3]   i=3 j=3

function transformarMatriz(matriz) {
    console.table(matriz)
    let numDiagP;
    let mediaDs;
    let somaSecundaria = 0
    let tamanho = matriz.length - 1

    for (let i = 0; i < 3; i++) {
        somaSecundaria = somaSecundaria + matriz[i][tamanho]
        tamanho = tamanho - 1
    }
    mediaDs = somaSecundaria / 3
    tamanho = 0;

    for (let i = 0; i < 3; i++) {
        matriz[i][i] = matriz[i][i] * mediaDs
    }
    console.log(mediaDs)
    console.table(matriz)


}
gerarMatriz()