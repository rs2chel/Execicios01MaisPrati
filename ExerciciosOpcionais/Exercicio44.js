// // Exercício 44

// 44. Escreva uma função que conte quantas propriedades do tipo string existem em um
// objeto e retorne esse número.



function contString(obj) {
    let contador = 0;

    for (ob in obj) {

        if (typeof (obj[ob]) === 'string') {
            contador += 1
        }
    }
    return contador
}



let objeto = {
    'Nome': 'Rachel',
    'idade': 26,
    'E-mail': 'rachelmeijom@gmail.com',
    'telefone': '31-998877664',
    'Endereco': 'rua um',
    'NumeroCasa': 120
}

let quantidadeString = contString(objeto)
console.log(quantidadeString)