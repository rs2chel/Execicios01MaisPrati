// // Exercício 29

// 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
// a) da linha 4 de M;
// b) da coluna 2 de M;
// c) da diagonal principal;
// d) todos os elementos da matriz M.
// Escrever essas somas e a matriz.



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
    dados(matriz)
}

function dados(matriz) {
    const somaLinha4 = matriz[3].reduce((acc, val) => acc + val, 0)
    const somaColuna2 = matriz.reduce((acc, linha) => acc + linha[1], 0)
    const somaDiagonalPrincipal = matriz.reduce((acc, linha, i) => acc + linha[i], 0)
    const somaTotal = matriz.reduce((acc, linha) => acc + linha.reduce((a, b) => a + b, 0), 0)

    console.log("Matriz M:")
    console.table(matriz)

    console.log("\nSoma da linha 4:", somaLinha4)
    console.log("Soma da coluna 2:", somaColuna2)
    console.log("Soma da diagonal principal:", somaDiagonalPrincipal)
    console.log("Soma de todos os elementos:", somaTotal)
}


gerarMatriz()