// // Exercício 36

// 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
// um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
// do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
// número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
// o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
// mensagem "Parabéns, tu foi o GANHADOR".


function statusApostador(quantidadeAcertos) {
    // funcao que apresenta o ganhador, percorrendo um array que salvou a quantidade de acerto
    for (let quantidade of quantidadeAcertos) {

        if (quantidade === 13) {
            console.log(`Parabéns, tu foi o GANHADOR`)
        } else if (quantidade > 0 && quantidade < 13) {
            console.log(`Infelizemente voce não ganhou, voce acertou ${quantidade} numero(s)`)
        } else {
            console.log(`Infelizemente voce não ganhou, voce nao acertou nenhum numero`)
        }
    }
}

function verificandoAcertos(todosApostas) {

    // funcao que corrige e verifica se o aluno foi aprovado ou nao
    let numerosSorteados = [3, 6, 22, 45, 52, 57, 58, 60, 65, 88, 92, 97, 99]
    let acertos = 0;
    let acertosApostadores = [];
    todosApostas.push(numerosSorteados)// Adicionando os numeros sorteados como a ultima aposta
    for (let aposta of todosApostas) {
        for (numero in aposta) {
            if (aposta[numero] === numerosSorteados[numero]) {
                acertos += 1
            }
        }
        acertosApostadores.push(acertos)
        acertos = 0
    }

    statusApostador(acertosApostadores)
}

function apostasJogadores() {
    // funcao que gera randomicamente 13 numero para 99 apostadores,o 100 sera adicionado a aposta vencedora para fim de teste
    // pois com numeros aleatorios é muito improvavel

    let todasApostas = []
    let apostaJogador = []
    do {
        numero = Math.floor(Math.random() * 100)
        if (apostaJogador.length === 13) {
            todasApostas.push(apostaJogador)
            apostaJogador = []
        }

        apostaJogador.push(numero)

    } while (todasApostas.length < 99)

    verificandoAcertos(todasApostas)
}

apostasJogadores()


