
// 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// sistema funciona assim:
// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar



function resultado(cliente) {
    console.log(`
        Cliente: ${cliente['nome']}
        Horas feitas: ${cliente['horas']}
        Pontos recebidos:  ${cliente['pontosTotais']}
        Valor a receber: ${cliente['valor']}`)
}

function CalculoValor(nome, horas) {

    let pontosPorHora = horas <= 10 ? 2 : horas <= 20 ? 5 : 10
    let pontosTotais = pontosPorHora * horas
    let valor = (pontosTotais * 0.05).toFixed(2)

    let cliente = {
        'nome': nome,
        'horas': horas,
        'pontosPorHora': pontosPorHora,
        'pontosTotais': pontosTotais,
        'valor': valor
    }
    resultado(cliente)

}


CalculoValor('pedro', 10)
CalculoValor('marcia', 20)
CalculoValor('eliana', 70)
CalculoValor('sara', 18)
CalculoValor('henrique', 35)
CalculoValor('silva', 15)
CalculoValor('juliana', 37)
CalculoValor('andreia', 22)
CalculoValor('marcos', 11)
CalculoValor('silvio', 44)
CalculoValor('elena', 22)
CalculoValor('julio', 66)
