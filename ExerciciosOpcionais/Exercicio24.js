// 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
// quantidade de elementos negativos da linha correspondente de M.

function gerarMatriz() {
    let matriz = []
    let numero;
    let linha = []

    for (let i = 0; i < 6; i++) {
        linha = []
        for (let j = 0; j < 8; j++) {
            let numero = Math.floor(Math.random() * 20) - 10
            linha.push(numero)
        }
        matriz.push(linha)
    }
    return matriz

}


function contarNegativosPorLinha(matriz) {
    return matriz.map(linha =>
        linha.reduce((cont, valor) => valor < 0 ? cont + 1 : cont, 0)
    )
}

function mostrarResultado(matriz, vetorC) {
    console.table(matriz)

    vetorC.forEach((qtd, i) => {
        console.log(`Linha ${i + 1}: ${qtd} número(s) negativo(s)`)
    })

    console.log("\nVetor C (quantidade de negativos por linha):", vetorC)
}

// Execução do programa
const matriz = gerarMatriz()
const vetorC = contarNegativosPorLinha(matriz)
mostrarResultado(matriz, vetorC)


