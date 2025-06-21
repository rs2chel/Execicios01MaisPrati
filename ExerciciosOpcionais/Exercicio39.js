// // Exercício 39

// 39. Faça um algoritmo que leia um vetor(A) de 100 posições.Em seguida, compacte o
// vetor, retirando os valores nulos e negativos.Coloque o resultado no vetor B.


function gerarVetorA(tamanho = 100, minimo = -50, maximo = 100) {
    const vetorA = [];

    for (let i = 0; i < tamanho; i++) {
        const numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        vetorA.push(numero);
    }

    return vetorA;
}

function gerarVetorB(arr) {
    return arr.filter(item => item > 0)
}
const vetorA = gerarVetorA();
let vetorGerado = gerarVetorB(vetorA)

console.log("Quantidade original:", vetorA.length);
console.log("Quantidade após compactar:", vetorGerado.length);