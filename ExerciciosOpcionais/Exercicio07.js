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
        \n Serão ${cliente['dias']} dias
        \n Serão ${cliente['km']} km percorridos.
        \n E o tipo de carro será ${tipoCarro}
        \n E o valor total a pagar é: ${cliente['valor'].toFixed(2)}`)
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
    console.log(`O carro escolhido foi o tipo ${cliente['carro']} e a distancia percorrida foi ${cliente['km']} o valor a pagar é  ${cliente['valor']}`)


    resultadoTela(cliente)
}

function dadosCliente() {
    console.log("CADASTRO PARA ALUGUEL DE VEICULOS ")

    let cliente = {
        'nome': prompt("Digite seu nome: "),
        'dias': prompt("Quantos dias de aluguel: "),
        'km': prompt("Quantos Km serão percorridos: "),
        'carro': prompt("Escolha o tipo de carro: \n 1- Carro Popular \n 2- Carro Luxo "),
        'valor': 0
    }
    valorTotal(cliente)
}


dadosCliente()