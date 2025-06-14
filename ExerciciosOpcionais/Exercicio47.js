// // Exercício 47

// 47. Crie uma função que transforme um objeto de entrada aplicando uma função
// fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
// resultados.
// 


let notas = {
    'aluno1': 10,
    'aluno2': 9,
    'aluno3': 6,
    'aluno4': 10,
    'aluno5': 2,
    'aluno6': 6,
    'aluno7': 7,
    'aluno8': 5,
    'aluno9': 8,
}


function extras(notas) {
    let novaNotas = {}
    for (let nota in notas) {
        novaNotas[nota] = notas[nota] * 2

    }
    console.log(novaNotas)
}



extras(notas)