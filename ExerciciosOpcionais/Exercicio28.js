// 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
// item:
// a) a soma dos elementos acima da diagonal principal;
// b) a soma dos elementos abaixo da diagonal principal;
// 
// 
// // Criando uma matriz 10x10 com valores de exemplo
function gerarMatriz() {
    let matriz = []
    let numero;
    let linha = []
    for (let i = 0; i < 10; i++) {
        linha = []
        for (let j = 0; j < 10; j++) {
            numero = Math.floor(Math.random() * 10)
            linha.push(numero)
        }
        matriz.push(linha)
    }
    return matriz
}
let matriz = gerarMatriz()

// Soma dos elementos acima da diagonal principal
const somaAcimaDiagonal = matriz.reduce((soma, linha, i) => {
    return soma + linha.reduce((subSoma, val, j) => {
        return j > i ? subSoma + val : subSoma
    }, 0)
}, 0)

// Soma dos elementos abaixo da diagonal principal
const somaAbaixoDiagonal = matriz.reduce((soma, linha, i) => {
    return soma + linha.reduce((subSoma, val, j) => {
        return i > j ? subSoma + val : subSoma
    }, 0)
}, 0)

// Exibindo a matriz
console.log("Matriz 10x10:")
console.table(matriz)

console.log("\nSoma acima da diagonal principal:", somaAcimaDiagonal)
console.log("Soma abaixo da diagonal principal:", somaAbaixoDiagonal)
