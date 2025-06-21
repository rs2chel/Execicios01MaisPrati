// // Exercício 35

// 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
// conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
// estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
// vetor pode ser preenchido quantas vezes forem necessárias.


function checkNumber(numeros) {
    let impar = [];
    let par = [];

    for (let numero of numeros) {
        if (numero % 2 === 0) {

            par.push(numero)

            if (par.length === 5) {
                console.log('Vetor par cheio:', par);
                par = [];
            }
        } else {

            impar.push(numero)

            if (impar.length === 5) {
                console.log('Vetor ímpar cheio:', impar);
                impar = [];
            }
        }
    }
    // Mostra os que sobraram ao final
    if (par.length > 0) {
        console.log('Números pares restantes:', par);
    }
    if (impar.length > 0) {
        console.log('Números ímpares restantes:', impar);
    }
}










const numeros = [12, 7, 5, 10, 23, 8, 3, 18, 1, 4,
    14, 9, 27, 6, 11, 2, 20, 25, 16, 19,
    13, 15, 17, 22, 24, 21, 28, 26, 30, 50];


checkNumber(numeros) 