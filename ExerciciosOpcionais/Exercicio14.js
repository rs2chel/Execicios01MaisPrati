// 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
// mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
// que eles foram informados.


const prompt = require('prompt-sync')()

function sortName(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // troca os elementos
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log('NOMES ORDENADOS:');
    console.log(arr);
}
function inverseName(arr) {
    console.log('ORDEM INVERSA DA QUAL FOI ADICIONADO:');
    let tam = arr.length - 1
    for (let i = tam; i >= 0; i--) {
        console.log(arr[i])
    }
}
function nomesInput() {
    let nomes = [];
    let nome;
    for (let i = 0; i < 7; i++) {
        nome = prompt('Digite um nome:')
        nomes.push(nome)
    }
    inverseName(nomes)
    sortName(nomes);


}

nomesInput()