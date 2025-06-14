// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.
function setStrings(saudacao) {
    let novaSaudacao = []
    let palavra = ''

    for (let letra of saudacao) {
        if (letra === ' ') {
            if (palavra !== '' && !novaSaudacao.includes(palavra)) {
                novaSaudacao.push(palavra)
            }
            palavra = ''
        } else {
            palavra += letra
        }
    }

    // Adiciona a última palavra se necessário
    if (palavra !== '' && !novaSaudacao.includes(palavra)) {
        novaSaudacao.push(palavra)
    }

    console.log(novaSaudacao)
    return novaSaudacao
}

let saudacao = "ola  ola  mundo  mundo"
let apresentacao = "meu nome e nome e sara meu cachorro e gato verde sara azul"

setStrings(saudacao)
// Saída esperada: ['ola', 'mundo']

setStrings(apresentacao)
// Saída esperada: ['meu', 'nome', 'e', 'sara', 'cachorro', 'gato', 'verde', 'azul']



