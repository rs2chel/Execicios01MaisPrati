// // Exercício 27

// 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
// multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
// um vetor V(36). Escrever o vetor V no final.


function gerarVetorV(matriz, a) {
    let numero;
    let vetorV = []
    for (let i = 0; i < 6; i++) {
        linha = []
        for (let j = 0; j < 6; j++) {
            numero = matriz[i][j] * a
            vetorV.push(numero)
        }
    }
    console.table(vetorV)
}
function gerarMatriz() {
    let matriz = []
    let numero;
    let linha = []
    let a = numero = Math.floor(Math.random() * 10)
    for (let i = 0; i < 6; i++) {
        linha = []
        for (let j = 0; j < 6; j++) {
            numero = Math.floor(Math.random() * 10)
            linha.push(numero)
        }
        matriz.push(linha)
    }
    console.log('Matriz (6,6)')
    console.table(matriz)
    console.log(' Número A sorteado:',)
    gerarVetorV(matriz, a)
}

gerarMatriz()