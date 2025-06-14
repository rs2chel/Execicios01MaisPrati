// // Exercício 22

// 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
// dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
// número não determinado de pessoas e retorne a média de salário da população, a
// média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
// 350,00.

const prompt = require('prompt-sync')()

function dadosPopulacao(filhos, renda) {

}


function leitorDados() {
    let opçao = 1;
    let dados = [];
    let salario, filhos;
    while (opçao != 2) {

        salario = Number(prompt("Digite o seu salario:"))
        dados = Number(prompt("Digite o numero de filhos:"))






        opcao = Number(prompt("Deseja adicionar mais? \n 1- SIM\n 2- NÂO\n"))
        if (opcao == 2) break
    }
}

leitorDados()

for 