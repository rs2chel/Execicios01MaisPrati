// // Exercício 40

// 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
// resultado oficial da Loto.A seguir, leia 50 conjuntos de vetores(com 5 elementos inteiros
// cada), representando as apostas feitas.Compare os números das apostas com o
// resultado oficial e mostre uma mensagem("Ganhador") se todos os números
// corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
// e quadras, apenas por quinas.)


function verificarGanhador(arr) {
    let numerosSorteados = arr[0]// fazendo que o numero sorteado seja o primeiro array para returnar um true

    for (item of arr) {
        if (numerosSorteados.every((val, i) => val === item[i])) {
            // comparando se o array numeros sorteados contem os mesmo numeros do outro array
            console.log('Aposta ganhadora', numerosSorteados)
        } else {
            console.log('Infelizmente voce perdeu, tente novamente!')
        }
    }
}



function gerarApostas(qtdeAposta, tamanhoAposta, limite) {
    const apostas = [];

    for (let i = 0; i < qtdeAposta; i++) {
        const aposta = new Set();

        // Garante que não haja números repetidos na mesma aposta
        while (aposta.size < tamanhoAposta) {
            aposta.add(Math.floor(Math.random() * limite) + 1);
        }

        apostas.push([...aposta]);
    }

    return apostas;
}


const apostasGeradas = gerarApostas(50, 5, 60);

verificarGanhador(apostasGeradas)


