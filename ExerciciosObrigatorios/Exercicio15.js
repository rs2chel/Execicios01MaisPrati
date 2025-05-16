//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//Fibonacci utilizando um loop for.

let num1 = 1
let num2 = 0;
let num3 = 0;

for (i = 0; i < 10; i++) {
    console.log(num1)
    if (num2 == 0) {
        num2 = num1
    }
    num3 = num1 + num2
    num1 = num2
    num2 = num3

}