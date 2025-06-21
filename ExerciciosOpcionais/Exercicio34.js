// // Exercício 34

// 34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
// cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
// multiplicações.





function gerarMatriz() {
    let matriz = []
    for (let i = 0; i < 50; i++) {
        let linha = []
        for (let j = 0; j < 50; j++) {
            let numero = parseFloat((Math.random() * 100).toFixed(2))
            linha.push(numero)
        }
        matriz.push(linha)
    }
    console.table(matriz)
    transformarMatriz(matriz)
}

function transformarMatriz(matriz) {
    const novaMatriz = []

    for (let i = 0; i < 50; i++) {
        let novaLinha = []
        let numMultiplicar = matriz[i][i] // pega o valor da diagonal principal da linha atual
        for (let j = 0; j < 50; j++) {
            let novoNumero = matriz[i][j] * numMultiplicar
            novaLinha.push(novoNumero)
        }
        novaMatriz.push(novaLinha)
    }

    console.log("Matriz transformada:")
    console.table(novaMatriz)
}

gerarMatriz()
