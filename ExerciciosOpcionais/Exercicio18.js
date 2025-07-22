// 18. Crie um registro com o nome do funcionário,
//  cargo e salário. Leia este registro para
// um funcionário e ao final escreva o conteúdo do registro.

// Exercicio18 
funcionarios = [
    {
        'Nome': 'Pedro Augusto',
        'Cargo': 'Tecnico TI',
        'Salario': 3500
    },
    {
        'Nome': 'Jose Pedro',
        'Cargo': 'Suporte TI',
        'Salario': 2500
    },
    {
        'Nome': 'Marcelo Vinicius',
        'Cargo': 'Analista de TI',
        'Salario': 3500
    }
]


for (funcionario of funcionarios) {
    console.log(
        `
    Registro Funcionario 
    Nome: ${funcionario.Nome},
    Cargo: ${funcionario.Cargo},
    Salario: ${funcionario.Salario}
    `)
}
