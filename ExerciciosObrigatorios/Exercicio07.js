// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.


function valorMaca(quantidadeVendida) {
    let valor = 0;
    if (quantidadeVendida < 12) {
        valor = quantidadeVendida * 0.30;
    } else {
        valor = quantidadeVendida * 0.25;
    }
    console.log(`O valor total a ser pago por ${quantidadeVendida} maças é  ${valor.toFixed(2)}. `)
}


valorMaca(10);

valorMaca(50);

valorMaca(100);

valorMaca(20);

valorMaca(2);

valorMaca(7);
