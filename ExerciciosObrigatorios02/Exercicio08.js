// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.



const vendas = [
    { cliente: "Ana", total: 100 },
    { cliente: "João", total: 50 },
    { cliente: "Ana", total: 30 },
    { cliente: "Carlos", total: 70 },
    { cliente: "João", total: 20 },
    { cliente: "Maria", total: 90 },
    { cliente: "Ana", total: 80 },
    { cliente: "Carlos", total: 40 },
    { cliente: "Maria", total: 60 }
];


const newObj = vendas.reduce(
    (accumulator, currentValue) => {

        if (!accumulator[currentValue.cliente]) {
            accumulator[currentValue.cliente] = currentValue['total'];
        } else {
            accumulator[currentValue.cliente] += currentValue.total;
        }
        return accumulator;
    }, {}
)



console.log(newObj)