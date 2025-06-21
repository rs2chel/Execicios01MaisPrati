// 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
// de cada coluna separadamente.


function somaColuna(matriz) {
    const colunas = matriz[0].length

    for (let j = 0; j < colunas; j++) {
        const soma = matriz.reduce((acc, linha) => acc + linha[j], 0)
        console.log(`Soma da coluna ${j + 1}: ${soma}`)
    }
}


function gerarMatriz() {
    let matriz = []
    let numero;
    let linha = []

    for (let i = 0; i < 15; i++) {
        linha = []
        for (let j = 0; j < 20; j++) {
            numero = Math.floor(Math.random() * 10)
            linha.push(numero)
        }
        matriz.push(linha)
    }
    console.table(matriz)
    somaColuna(matriz)
}

gerarMatriz()