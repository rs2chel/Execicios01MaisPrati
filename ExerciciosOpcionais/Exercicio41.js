// // Exercício 41
// 41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
// idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
// nome e idade.


let pessoa = {
    'nome': 'Rachel',
    'idade': 26,
}


pessoa['email'] = 'rachelmeijom@gmail.com'


// Para acessar todos os dados

// for (dados in pessoa) {
//     console.log(pessoa[dados])
// }

console.log(`
     Nome : ${pessoa['nome']}
     Idade : ${pessoa['idade']}
     Email:  ${pessoa['email']}
    `)

