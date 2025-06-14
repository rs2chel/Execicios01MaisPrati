// Seção 3: Arrays e Objetos Complexos
// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.


const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Smartphone", preco: 2200 },
    { nome: "Fone de Ouvido", preco: 150 },
    { nome: "Monitor", preco: 900 },
    { nome: "Teclado", preco: 120 },
    { nome: "Mouse", preco: 80 },
    { nome: "Webcam", preco: 200 },
    { nome: "Impressora", preco: 750 },
    { nome: "Cadeira Gamer", preco: 1200 },
    { nome: "HD Externo", preco: 400 }
];



function sortArray(prod) {

    let ordenado = [...prod].sort((firstItem, secondItem) => firstItem.preco - secondItem.preco); //ordena uma copia 
    const nomesOrdenados = ordenado.map((item) => item.nome) // adiciona o item ja ordenado no array
    return nomesOrdenados;
}


console.log(sortArray(produtos))