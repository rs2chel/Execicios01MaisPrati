// 9. Conversão Entre Formatos
// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.]



function paresParaObjeto(pares) {
    const obj = Object.fromEntries(pares)
    return obj
}

function objetoParaPare(obj) {
    let newarray = Object.entries(obj)
    return newarray
}

let arr = [["nome", "Rachel"], ["idade", 25]]
let obj = { nome: "Marta", idade: 29 };

console.log(paresParaObjeto(arr))
console.log(objetoParaPare(obj))
