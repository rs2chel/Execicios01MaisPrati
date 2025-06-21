// // Exercício 31

// 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
// Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
// todos os elementos de V diferentes de A. Mostre os resultados.




function valoresIgualA(matriz, a) {
    let cont = 0
    let novaMatriz = []
    let novaLinha = []
    for (let i = 0; i < 30; i++) {
        novaLinha = []
        for (let j = 0; j < 30; j++) {
            if (matriz[i][j] === a) {
                cont = cont + 1
            }
            else {
                novaLinha.push(matriz[i][j])
            }

        }
        novaMatriz.push(novaLinha)

    }
    console.log(`´Quantidade de números igual a A= ${cont}`)
    console.log('A:', a)
    console.table(novaMatriz)
}
function gerarMatriz() {
    let matriz = []
    let numero;
    let linha = []
    let a = numero = Math.floor(Math.random() * 100)
    for (let i = 0; i < 30; i++) {
        linha = []
        for (let j = 0; j < 30; j++) {
            numero = Math.floor(Math.random() * 100)
            linha.push(numero)
        }
        matriz.push(linha)
    }
    valoresIgualA(matriz, a)
}

gerarMatriz()