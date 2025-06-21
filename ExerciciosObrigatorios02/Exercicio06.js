// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const chave = JSON.stringify(args);

        if (cache.has(chave)) {
            // Quando já tiver no cache, retorna mensagem de "bem-vindo de volta"
            const nome = args[0];
            return `Bem-vindo de volta, ${nome}!`;
        }

        const resultado = fn.apply(this, args);
        cache.set(chave, resultado);
        return resultado;
    };
}

// Função original que cumprimenta
function cumprimentar(nome) {
    return `Olá, ${nome}!`;
}

const cumprimentarMemo = memoize(cumprimentar);

console.log(cumprimentarMemo("Rachel")); // mensagem de saudacao normal 
console.log(cumprimentarMemo("Marcela"));  //mensagem de saudacao normal 
console.log(cumprimentarMemo("Rachel")); // mensagem de saudacao de retorno
console.log(cumprimentarMemo("Veronica"));  //mensagem de saudacao normal 
