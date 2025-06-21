// // Exercício 43

// 43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
// combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
// sobre as do obj1 em caso de conflitos.

function mergeobj(obj1, obj2) {
    const combinacaoObj = [...Object.entries(obj1), ...Object.entries(obj2)];

    return combinacaoObj.reduce((acc, [chave, valor]) => {
        acc[chave] = valor;
        return acc;
    }, {});
}

let pessoa1 = {
    'nome': 'Ana julia',
    'idade': 27,
    'Estado': 'Rio de Janeiro',
    'Pais': 'Brasil',
    'filhos': 3,
    'EstadoCivil': 'divorciada',
    'telefone': '11 99999-9999'
}

let pessoa2 = {
    'nome': 'Ana Maria',
    'idade': 35,
    'Estado': 'Rio de Janeiro',
    'EstadoCivil': 'Casada'
}

console.log(mergeobj(pessoa1, pessoa2))