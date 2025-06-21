// // Exercício 46

// 46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
// com vendedor e valor.Escreva uma função que retorne um objeto que sumarize o total
// de vendas por vendedor.[]



function totalVenda(lista) {
    return lista.reduce((acc, item) => {
        const { vendedor, valor } = item;
        acc[vendedor] = (acc[vendedor] || 0) + valor;
        return acc;
    }, {});
}






const vendas = [
    { vendedor: "Ana", valor: 100 },
    { vendedor: "Carlos", valor: 200 },
    { vendedor: "Ana", valor: 150 },
    { vendedor: "Beatriz", valor: 360 },
    { vendedor: "Carlos", valor: 50 },
    { vendedor: "Beatriz", valor: 100 },
    { vendedor: "Ana", valor: 200 },
    { vendedor: "Beatriz", valor: 350 },
    { vendedor: "Carlos", valor: 50 },
    { vendedor: "Beatriz", valor: 100 },
    { vendedor: "Ana", valor: 234 }

];


console.log("\nResultado Final:", totalVenda(vendas));
