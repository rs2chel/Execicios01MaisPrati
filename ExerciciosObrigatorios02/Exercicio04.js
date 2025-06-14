// Seção 2: Funções e Recursão
// 4. Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.

function fatorial(n) {
    if (n < 0) {
        console.log('erro: número negativo')
        return 'erro'
    } else if (n === 0) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(5))


console.log(fatorial(5)) // 120
console.log(fatorial(0)) // 1
console.log(fatorial(-3)) // erro