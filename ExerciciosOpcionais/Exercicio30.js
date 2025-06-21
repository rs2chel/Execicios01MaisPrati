// // Exercício 30

// 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
// contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
// e os vetores criados.


function somaColuna(matriz) {
    coluna = []
    let somaColuna = 0
    sl = []

    for (let i = 0; i < 5; i++) {

        for (let j = 0; j < 5; j++) {
            somaColuna = somaColuna + matriz[j][i]

        }
        sl.push(somaColuna)
        somaColuna = 0

    }
    console.log('Soma Coluna')
    console.table(sl)
}



function somaLinha(matriz) {
    linha = []
    let somaLinha = 0
    sl = []

    for (let i = 0; i < 5; i++) {
        somaLinha = 0
        for (let j = 0; j < 5; j++) {
            somaLinha = somaLinha + matriz[i][j]

        }
        sl.push(somaLinha)

    }
    console.log('Soma Linha')
    console.table(sl)
}


function gerarMatriz() {
    let matriz = []
    let numero;
    let linha = []

    for (let i = 0; i < 5; i++) {
        linha = []
        for (let j = 0; j < 5; j++) {
            numero = Math.floor(Math.random() * 10)
            linha.push(numero)
        }
        matriz.push(linha)
    }
    console.log('Matriz Gerada')
    console.table(matriz)
    somaLinha(matriz)
    somaColuna(matriz)
}

gerarMatriz()