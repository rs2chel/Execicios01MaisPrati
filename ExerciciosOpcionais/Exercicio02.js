// 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
// , exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

const prompt = require('prompt-sync')()
let velocidade = Number(prompt("Qual velocidade voce passou no radar "))



function radar(velocidade) {
    if (velocidade > 80) {
        let extra = velocidade - 80
        let valor = extra * 5
        console.log(`Voce passou a ${velocidade}Km, foi ${extra}km alem do permitido e foi multado em ${valor} reais. `);

    } else {
        console.log(`Parabéns voce esta dentro da velocidade permitida `);
    }
}

radar(velocidade);