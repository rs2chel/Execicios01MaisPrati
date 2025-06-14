// 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
// dois vetores, em posições relacionadas. 
// No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade

const prompt = require('prompt-sync')()

function names() {
    let nomes = [];
    let idades = []
    let nome, idade;

    for (i = 0; i < 3; i++) {
        nome = prompt(`Digite o ${i + 1}º nome:`)
        idade = prompt(`Digite a ${i + 1}ª idade:`)
        nomes.push(nome)
        idades.push(idade)
    }
    return checkIdade(nomes, idades)
}

function checkIdade(nomes, idades) {

    let menores = []
    for (i = 0; i < nomes.length; i++) {
        if (idades[i] < 18) {
            menores.push([nomes[i], idades[i]])
        }

    }
    return filtroMenores(menores)
}


function filtroMenores(menores) {
    console.log(`Os menores são:`)

    menores.forEach(pessoa => {
        console.log(`${pessoa[0]} com  ${pessoa[1]} anos de idade. `)
    });

}

names()