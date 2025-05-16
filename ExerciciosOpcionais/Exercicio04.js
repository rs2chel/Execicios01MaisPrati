// Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.


let triangulo1 = [3, 4, 5];
let triangulo2 = [2, 3, 6];

function verificaTriangulo([a, b, c]) {

    if (a + b > c && a + c > b && b + c > a) {
        console.log(`As retas ${a} ${b} ${c} podem formar um triangulo`);
    } else {
        console.log(`As retas ${a} ${b} ${c}  NÃO podem formar um triangulo`);
    }

}

verificaTriangulo(triangulo1);
verificaTriangulo(triangulo2);