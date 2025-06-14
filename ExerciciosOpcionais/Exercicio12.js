
// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.


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