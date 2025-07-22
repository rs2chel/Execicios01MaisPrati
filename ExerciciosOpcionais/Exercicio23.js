// // 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
// diagonal principal são iguais a 1 e os demais são nulos.

function gerarMatriz() {
    let matriz = []
    let numero;
    let linha = []


    for (let i = 0; i < 7; i++) {
        linha = []
        for (let j = 0; j < 7; j++) {

            if (j === i) {
                numero = 1
            } else {
                numero = 0
            }
            linha.push(numero)
        }
        matriz.push(linha)
    }
    return matriz

}

let matrizUm = gerarMatriz()



console.table(matrizUm)