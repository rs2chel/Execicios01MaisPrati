
// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário.
const prompt = require('prompt-sync')()

function estatisticasFuncionaris(opcao, salarioFuncionarios) {
    console.log('opcao' + opcao)
    if (opcao == 0) {
        console.log(`
        SALÁRIO TOTAL: 
        HOMENS : R$ ${salarioFuncionarios['salariototHomens'].toFixed(2)}
        MULHERES: R$ ${salarioFuncionarios['salariototMuheres'].toFixed(2)}
        TOTAL: R$ ${(salarioFuncionarios['salariototHomens'] + salarioFuncionarios['salariototMuheres']).toFixed(2)}
        `);
    } else if (opcao == 1) {
        console.log(`
        MÉDIA SALARIAL: 
        HOMENS : R$ ${salarioFuncionarios['mediaHomens']}
        MULHERES: R$ ${salarioFuncionarios['mediaMulheres']}
        `);
    } else if (opcao == 2) {
        console.log(`
        TOTAL FUNCIONÁRIOS: 
        HOMENS : ${salarioFuncionarios['totHomens']}
        MULHERES: ${salarioFuncionarios['totMuheres']}
        TOTAL : ${salarioFuncionarios['totHomens'] + salarioFuncionarios['totMuheres']}
        `);
    } else if (opcao == 3) {
        console.log(`
        CADASTROS ERRADOS: 
        TOTAL : ${salarioFuncionarios['cadastrosErrados']}
        `);
    } else {
        console.log('Opção Inválida!');
    }
}




function menu(salarioFuncionarios) {
    let opcao = 0;

    while (opcao != 4) {
        console.log(`'----------MENU---------' 
            \n 0 - SALARIO TOTAL  
            \n 1 - MEDIA SALARIOS 
            \n 2 - TOTAL FUNCIONARIOS 
            \n 3 - TOTAL CADASTROS ERRADOS
            \n 4 - ENCERRAR PROGRAMA`)
        opcao = Number(prompt('DIGITE OS DADOS QUE DESEJA VISUALIZAR'))
        if (opcao != 4) {
            estatisticasFuncionaris(opcao, salarioFuncionarios)
        }

    }

}





function calculos(funcionarios) {
    // salario total pago para os homens e para mulher
    // salario medio para homens e mulheres 
    let salarioFuncionarios = {
        'totHomens': 0,
        'totMuheres': 0,
        'salariototHomens': 0,
        'salariototMuheres': 0,
        'mediaHomens': 0,
        'mediaMulheres': 0,
        'cadastrosErrados': 0
    }

    funcionarios.forEach(funcionario => {
        if (funcionario['sexo'].toUpperCase() === 'M') {

            salarioFuncionarios['totHomens']++
            salarioFuncionarios['salariototHomens'] += funcionario['salario']

        } else if (funcionario['sexo'].toUpperCase() === 'F') {

            salarioFuncionarios['totMuheres']++
            salarioFuncionarios['salariototMuheres'] += funcionario['salario']
        } else {
            salarioFuncionarios['cadastrosErrados']++
        }
    });

    salarioFuncionarios['mediaHomens'] = salarioFuncionarios['salariototHomens'] / salarioFuncionarios['totHomens']
    salarioFuncionarios['mediaMulheres'] = salarioFuncionarios['salariototMuheres'] / salarioFuncionarios['totMuheres']

    return menu(salarioFuncionarios)

}




function cadastroSalarios() {
    console.log(" SALARIOS FUNCIONARIOS")
    let parar = 1;
    let funcionarios = [];

    while (parar != 2) {
        let funcionario = {
            'salario': Number(prompt('Digite o salario funcionario: ')),
            'sexo': prompt('Digite o sexo: \n F - FEMININO \n M- MASCULINO ')
        }
        funcionarios.push(funcionario)

        parar = Number(prompt("Deseja adicionar mais  ? \n 1- SIM \n 2- NÃO \n"))

    }
    // Para teste
    // let funcionarios = [
    //     { salario: 2500, sexo: 'F' },
    //     { salario: 3200, sexo: 'M' },
    //     { salario: 1800, sexo: 'F' },
    //     { salario: 4000, sexo: 'M' },
    //     { salario: 2900, sexo: 'F' },

    // ];

    calculos(funcionarios)
}

