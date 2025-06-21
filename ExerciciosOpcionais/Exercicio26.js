// // Exercício 26

// 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
// P[1..3,1..5].


function produtoMatriz(a, b) {

    const P = A.map((linha, i) =>
        linha.map((valor, j) => valor * B[i][j])
    );
    console.log('Matriz Produto')
    console.table(P)
}



function gerarMatriz(limiteI, limeteJ) {
    let matriz = []
    let numero;
    let linha = []

    for (let i = 0; i < limiteI; i++) {
        linha = []
        for (let j = 0; j < limeteJ; j++) {
            numero = Math.floor(Math.random() * 10)
            linha.push(numero)
        }
        matriz.push(linha)
    }
    return matriz

}


let A = gerarMatriz(3, 5)

let B = gerarMatriz(3, 5)
console.log('Matriz A')
console.table(A)
console.log('Matriz B')
console.table(B)

produtoMatriz(A, B)