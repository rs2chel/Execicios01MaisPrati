// // Exercício 32

// 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
// cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
// matriz lida e a modificada

function dividirmatriz(matriz, matrizMaior) {

    for (let i = 0; i < 12; i++) {
        console.log(matrizMaior[i])
        for (let j = 0; j < 13; j++) {
            matriz[i][j] = parseFloat((matriz[i][j] / matrizMaior[i]).toFixed(2))
        }

    }
    console.table(matriz)
}

function maiorNumeroLinha(matriz) {
    let maioresValores = [];
    let maiorLinha = 0;

    for (let i = 0; i < 12; i++) {

        for (let j = 0; j < 13; j++) {
            if (matriz[i][j] > maiorLinha) {
                maiorLinha = matriz[i][j]
            }
        }
        maioresValores.push(maiorLinha)
        maiorLinha = 0
    }

    dividirmatriz(matriz, maioresValores)

}

function gerarMatriz() {
    let matriz = []
    let numero;
    for (let i = 0; i < 12; i++) {
        let linha = []
        for (let j = 0; j < 13; j++) {
            numero = Math.floor(Math.random() * 100)
            linha.push(numero)
        }
        matriz.push(linha)
    }


    maiorNumeroLinha(matriz)
}

gerarMatriz()