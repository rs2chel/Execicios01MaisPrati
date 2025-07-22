// 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
// (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
// depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.s

// Função para gerar vetor com 20 números aleatórios entre 0 e 99
function gerarVetorAleatorio() {
    let vetor = [];
    for (let i = 0; i < 20; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 100);
        vetor.push(numeroAleatorio);
    }
    return vetor;
}

// Função para exibir e ordenar o vetor
function ordenarEVetor(vetor) {
    console.log("Números gerados:");
    console.log(vetor);

    vetor.sort((a, b) => a - b);

    console.log("Números em ordem crescente:");
    console.log(vetor);
}

// Chamada das funções
let vetorAleatorio = gerarVetorAleatorio();
ordenarEVetor(vetorAleatorio);
