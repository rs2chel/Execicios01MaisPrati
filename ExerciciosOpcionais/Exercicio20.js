// 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
// no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// Matrícula:
// Nome:
// Salário bruto:
// Dedução INSS:
// Salário líquido:
// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
// INSS)

function gerarFuncionarios(qtd) {
    let funcionarios = []

    for (let i = 1; i <= qtd; i++) {
        let matricula = i
        let nome = `Funcionário ${i}`
        let salarioBruto = Math.floor(Math.random() * (10000 - 2000 + 1)) + 2000
        let deducaoINSS = salarioBruto * 0.12
        let salarioLiquido = salarioBruto - deducaoINSS

        funcionarios.push({
            matricula,
            nome,
            salarioBruto: salarioBruto.toFixed(2),
            deducaoINSS: deducaoINSS.toFixed(2),
            salarioLiquido: salarioLiquido.toFixed(2)
        })
    }
    return funcionarios
}

function imprimirContracheques(funcionarios) {
    funcionarios.forEach(func => {
        console.log("Matrícula:", func.matricula)
        console.log("Nome:", func.nome)
        console.log("Salário bruto: R$", func.salarioBruto)
        console.log("Dedução INSS (12%): R$", func.deducaoINSS)
        console.log("Salário líquido: R$", func.salarioLiquido)
    })

}

const funcionarios = gerarFuncionarios(80)
imprimirContracheques(funcionarios)
