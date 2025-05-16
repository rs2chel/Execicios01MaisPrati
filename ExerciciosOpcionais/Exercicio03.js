// Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.

const prompt = require('prompt-sync')()
let distancia = Number(prompt("Há qual distancia voce esta do seu destino ? "))


function valorCorrida(distancia) {
    let valor = 0;
    if (distancia > 200) {
        valor = distancia * 0.45
    } else {
        valor = distancia * 0.50
    }
    console.log(`O valor total da sua corrida será ${valor} reais por ${distancia} KM percorrido`)
}


valorCorrida(distancia)