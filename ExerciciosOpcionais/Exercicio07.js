
const prompt = require('prompt-sync')()
// 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
// carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
// cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
// (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
// mostre o preço a ser pago de acordo com os dados a seguir:
// Carros populares
// - Até 100 Km percorridos: R$ 0,20 por Km
// - Acima de 100 Km percorridos: R$ 0,10 por Km
// Carros de luxo
// - Até 200 Km percorridos: R$ 0,30 por Km
// - Acima de 200 Km percorridos: R$ 0,25 por Km


function resultadoTela(cliente) {
    let tipoCarro = (cliente['carro'] === 1) ? 'Popular' : 'Luxo'

    console.log(` Cadastro Realizado:
        \n Nome: ${cliente['nome']}
        \n Dias: ${cliente['dias']} 
        \n Km:  ${cliente['km']}.
        \n Carro:  ${tipoCarro}
        \n Valor total: ${cliente['valor'].toFixed(2)}`)
}
function valorTotal(cliente) {
    let valorDia = ((cliente['carro'] === '1') ? 90 : 150) * cliente['dias']
    let valorKM = 0;
    // carro popular 1 carro de luxo 2
    if (cliente['carro'] === '1') {
        valorKM = ((cliente['km'] <= 100) ? 0.20 : 0.10) * cliente['km']
    } else {
        valorKM = ((cliente['km'] <= 100) ? 0.30 : 0.25) * cliente['km']
    }

    cliente['valor'] = valorDia + valorKM
    resultadoTela(cliente)
}


function lerEntrada(mensagem, validacao) {
    let valor;
    do {
        valor = prompt(mensagem);
        if (!validacao(valor)) {
            console.log("Entrada inválida. Tente novamente.");
        }
    } while (!validacao(valor));
    return valor;
}

function dadosCliente() {
    console.log("CADASTRO PARA ALUGUEL DE VEÍCULOS ");

    const nome = lerEntrada(
        "Digite seu nome: ",
        valor => valor.trim().length > 0
    );

    const tipoCarro = lerEntrada(
        "Escolha o tipo de carro: \n 1 - Carro Popular \n 2 - Carro Luxo ",
        valor => valor === '1' || valor === '2'
    );

    const dias = Number(lerEntrada(
        "Quantos dias de aluguel: ",
        valor => !isNaN(valor) && Number(valor) > 0
    ));

    const km = Number(lerEntrada(
        "Quantos Km serão percorridos: ",
        valor => !isNaN(valor) && Number(valor) >= 0
    ));



    const cliente = {
        nome,
        dias,
        km,
        carro: tipoCarro,
        valor: 0
    };

    valorTotal(cliente);
}

dadosCliente()


