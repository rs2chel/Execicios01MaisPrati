// // Exercício 22

// 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
// dados sobre o salário e número de filhos.
// Faça uma função que leia esses dados para um número não determinado de pessoas
// retorne 
// a média de salário da população,
// a média do número de filhos,
// o maior salário e o 
// percentual de pessoas com salário até R$ 350,00.

const prompt = require('prompt-sync')()


function mostrarInfo(informacaoPopulacao) {
    console.log(`
            Informações Habitantes

            Total de habitantes entrevistados: ${informacaoPopulacao.totalAnalise}
            Media de filhos dos habitantes: ${informacaoPopulacao.mediaFilhos}
            Media de salario dos habitantes: ${informacaoPopulacao.mediaSalario}
            Percentual de habitantes com salario até 350,00: ${informacaoPopulacao.percentualCritico}
            
        `)

}

function dadosPopulacao(dadosPopu) {
    let maiorSalario = 0;
    let percentual = 0
    let salarioTotal = 0;
    let filhosTotal = 0;
    let totalHabit = dadosPopu.length
    for (dados of dadosPopu) {
        if (dados['salario'] != NaN || dados['filhos'] != NaN || dados['salario'] != '' || dados['filhos'] != '') {
            filhosTotal += dados['filhos']
            salarioTotal += dados['salario']
            if (dados['salario'] <= 350) {
                percentual += 1;
            }
            if (dados['salario'] > maiorSalario) {
                maiorSalario = dados['salario']
            }
        }
    }
    let infoDados = {
        'totalAnalise': totalHabit,
        'maiorSalario': maiorSalario,
        'mediaFilhos': (filhosTotal / totalHabit).toFixed(2),
        'mediaSalario': (salarioTotal / totalHabit).toFixed(2),
        'percentualCritico': ((percentual / totalHabit) * 100).toFixed(2) + "%"

    }
    return mostrarInfo(infoDados)

}


function leitorDados() {
    let opcao = 1;
    let pessoas = [];
    let salario, filhos;
    while (opcao != 2) {

        salario = Number(prompt("Digite o seu salario:"))
        filhos = Number(prompt("Digite o numero de filhos:"))

        pessoas.push({ 'salario': salario, 'filhos': filhos })
        do {
            opcao = Number(prompt("Deseja adicionar mais? \n 1- SIM\n 2- NÂO\n"))
            if (opcao !== 1 && opcao !== 2) {
                console.log("Opção inválida. Digite 1 para SIM ou 2 para NÃO.")
            }
        } while (opcao !== 1 && opcao !== 2)

        if (opcao === 2) dadosPopulacao(pessoas)

    }
}

leitorDados()


// dados para teste
// const dadosTeste = [
//     { salario: 500, filhos: 1 },
//     { salario: 1200, filhos: 3 },
//     { salario: 350, filhos: 0 },
//     { salario: 1000, filhos: 2 },
//     { salario: 300, filhos: 2 },
//     { salario: 200, filhos: 7 }
// ];
// dadosPopulacao(dadosTeste);
