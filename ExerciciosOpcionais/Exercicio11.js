// 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
// Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
// valores da sequência.




function ProgressaoAri(razao, numero) {
    let numeros = []
    let num = numero;
    let soma = 0;


    for (i = 0; i < 10; i++) {
        soma += num
        numeros.push(num)
        num = num + razao

    }
    console.log(`
    Os números digitados foram: ${numeros}
    A soma dos valores é: ${soma}
    ` )

}




ProgressaoAri(3, 5)