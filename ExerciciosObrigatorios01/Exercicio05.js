// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.



// Veja a interpretação do IMC
// IMC	Classificação	Obesidade (grau)
// Menor que 18,5	Magreza	0
// Entre 18,5 e 24,9	Normal	0
// Entre 25,0 e 29,9	Sobrepeso	I
// Entre 30,0 e 39,9	Obesidade	II
// Maior que 40,0	Obesidade Grave	III

function calculoIMC(peso, altura) {
    let imc = peso / (altura ** 2);
    let classificacao;

    if (imc <= 18.5) {
        classificacao = 'Baixo peso'
    } else if (imc > 18.5 && imc <= 24.9) {
        classificacao = ' Peso Normal'
    } else if (imc > 25 && imc <= 29.9) {
        classificacao = 'Sobrepeso'
    } else if (imc > 30 && imc <= 39.9) {
        classificacao = 'Obesidade'
    } else if (imc > 40) {
        classificacao = 'Obesidade Grave'
    }

    //.toFixed(2) converte o número para string formatada com 2 casas decimais. 
    console.log(`Calculo imc é ${imc.toFixed(2)} e sua classificação é ${classificacao}`)

}


let pessoa1 = calculoIMC(80, 1.89)

let pessoa2 = calculoIMC(160, 1.89)

let pessoa3 = calculoIMC(40, 1.70)