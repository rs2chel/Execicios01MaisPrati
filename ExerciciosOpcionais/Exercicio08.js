<<<<<<< HEAD
// 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// sistema funciona assim:
// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar

function CalculoValor(horas) {

    let pontosPorHora = horas <= 10 ? 2 : horas <= 20 ? 5 : 10
    let pontosTotais = pontosPorHora * horas
    let valor = (pontosTotais * 0.05).toFixed(2)
    console.log(` O cliente fez ${horas} horas de exercicio e recebeu ${pontosTotais} pontos, o valor a receber é ${valor}`)
}


CalculoValor(10)
CalculoValor(20)
CalculoValor(40)
CalculoValor(18)
=======
// 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// sistema funciona assim:
// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar

function CalculoValor(horas) {

    let pontosPorHora = horas <= 10 ? 2 : horas <= 20 ? 5 : 10
    let pontosTotais = pontosPorHora * horas
    let valor = (pontosTotais * 0.05).toFixed(2)
    console.log(` O cliente fez ${horas} horas de exercicio e recebeu ${pontosTotais} pontos, o valor a receber é ${valor}`)
}


CalculoValor(10)
CalculoValor(20)
CalculoValor(40)
CalculoValor(18)
>>>>>>> 0cc3611 (Atualizacoes)
CalculoValor(30)