// // Exercício 49

// 49. Você recebe um array de objetos representando transações financeiras. Cada
// transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
// onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
// essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.

let transacoes = [{
    'id': 2024,
    'valor': 4.500,
    'data': '02/04/2025',
    'categoria': 'alimentacao'
}, {
    'id': 3090,
    'valor': 7.500,
    'data': '22/05/2025',
    'categoria': 'essenciais'
}, {
    'id': 2748,
    'valor': 2.500,
    'data': '21/03/2025',
    'categoria': 'lazer'
}, {
    'id': 1799,
    'valor': 3.500,
    'data': '21/05/2025',
    'categoria': 'essenciais'
}, {
    'id': 2255,
    'valor': 6.500,
    'data': '27/05/2025',
    'categoria': 'lazer'
}, {
    'id': 9683,
    'valor': 9.500,
    'data': '29/05/2025',
    'categoria': 'saude'
}, {
    'id': 2548,
    'valor': 4.500,
    'data': '23/05/2025',
    'categoria': 'saude'
}, {
    'id': 9568,
    'valor': 2.500,
    'data': '28/05/2025',
    'categoria': 'transporte'
}, {
    'id': 3568,
    'valor': 1.500,
    'data': '26/05/2025',
    'categoria': 'transporte'
}, {
    'id': 5274,
    'valor': 1.550,
    'data': '27/05/2025',
    'categoria': 'alimentacao'
}]


function relatorio(transacoes) {
    let dados = {};

    transacoes.forEach(transacao => {
        const categoria = transacao.categoria
        console.log(categoria)

        //Verifica se a categoria ja existe
        if (!dados[categoria]) {
            dados[categoria] = []
            dados[categoria].total = 0
        }
        //adiciona a transacao ao array correspondente 
        dados[categoria].push(transacao.valor)
        dados[categoria].total += transacao.valor


    });


    console.log(dados)
    return dados
}



relatorio(transacoes)