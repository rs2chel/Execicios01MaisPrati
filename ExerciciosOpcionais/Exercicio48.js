// // Exercício 48

// 48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
// inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
// item em estoque. Escreva uma função que combine os inventários em um único objeto.
// Se um item aparecer em ambas as lojas, some as quantidades.

let lojaA = {
    'Bola': 10,
    'Balao': 20,
    'Carinho': 15,
    'Cadernos': 35,
    'Lapis': 18,
    'Bonecas': 12
}

let lojaB = {
    'Bola': 10,
    'balde': 20,
    'Caminhao': 15,
    'Cadernos': 35,
    'Bonecas': 12,
    'corda': 5
}


function estoque(a, b) {
    let estoqueMerge = {}
    for (itens in a) {

        if (!estoqueMerge[itens]) {
            estoqueMerge[itens] = a[itens]
        }
    }

    for (itens in b) {
        if (!estoqueMerge[itens]) {
            estoqueMerge[itens] = b[itens]
        } else {
            estoqueMerge[itens] = (a[itens] + b[itens])
        }
    }
    console.log(estoqueMerge)
}

estoque(lojaA, lojaB)