// 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
// atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
// da sequência de Fibonacci




function Fibonacci() {
    let fibo = [];
    let num1 = 1;
    let num2 = 0;
    let num3 = 0;
    for (i = 1; i <= 15; i++) {
        fibo.push(num1)
        if (num2 == 0) {
            num2 = num1
        }
        num3 = num1 + num2
        num1 = num2
        num2 = num3
    }
    return fibo
}

console.log(Fibonacci())