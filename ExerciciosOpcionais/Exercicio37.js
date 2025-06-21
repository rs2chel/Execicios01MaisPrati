// // Exercício 37

// 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
// o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
// respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
// aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
// e mostre uma mensagem de “REPROVADO”, caso contrário.

// leia um vetor G de 20 elementos caractere
//leia o vetor de respostas (R) do aluno
//conte o número de acertos
//“APROVADO” para maior ou igual a 12

function statusAluno(quantidadeAcertos) {
    // funcao que apresenta o status do aluno, percorrendo um array que salvou a quantidade de acerto
    for (let quantidade of quantidadeAcertos) {
        if (quantidade >= 12) {
            console.log(`APROVADO, acertou ${quantidade} em 20 questões`)
        } else {
            console.log(`REPROVADO, acertou ${quantidade} em 20 questões`)
        }
    }
}

function correcao(respostasAlunos) {
    // funcao que corrige e verifica se o aluno foi aprovado ou nao
    let respostasCertas = ['a', 'a', 'c', 'c', 'd', 'c', 'a', 'e', 'e', 'd', 'a', 'a', 'e', 'c', 'b', 'b', 'd', 'c', 'c', 'e']
    let acertos = 0;
    let acertosAlunos = [];
    for (let resposta of respostasAlunos) {
        for (questao in resposta) {
            if (resposta[questao] === respostasCertas[questao]) {
                acertos += 1
            }
        }
        acertosAlunos.push(acertos)
        acertos = 0
    }
    statusAluno(acertosAlunos)
}

function alunosRespo() {
    // funcao que gera randomicamente as respostas de 20 questoes para 49 alunos,
    //  o primeiro aluno é colocado manualmente para verificar o funcionamento 
    // mas caso queira tirar  e deixar todos randomicamente é so declarar alunosResp =[]
    let opcoes = ['a', 'b', 'c', 'd', 'e',]
    const alunosResp = [['a', 'a', 'c', 'c', 'd', 'c', 'a', 'e', 'e', 'd', 'a', 'a', 'e', 'c', 'b', 'b', 'd', 'c', 'c', 'e'],]
    let respostaAluno = []
    let questao;
    do {
        questao = Math.floor(Math.random() * 5) + 1;
        respostaAluno.push(opcoes[questao - 1])
        if (respostaAluno.length === 20) {
            alunosResp.push(respostaAluno)
            respostaAluno = []

        }

    } while (alunosResp.length < 50)
    correcao(alunosResp)
}

alunosRespo()