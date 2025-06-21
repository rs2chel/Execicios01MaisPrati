// // Exercício 42

// 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
// strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
// propriedades que são arrays.a


function newObj(obj) {
    const resultado = {};
    const chaves = Object.keys(obj);

    for (let chave of chaves) {
        if (Array.isArray(obj[chave])) {
            resultado[chave] = obj[chave];
        }
    }

    return resultado;
}

const dados = {
    nome: "Jessica",
    idade: 25,
    estaEstudando: true,
    linguagensFavoritas: ["JavaScript", "Python", "HTML", "CSS"],
    cursosConcluidos: 3,
    notas: [9.5, 8.0, 10],
    endereco: {
        rua: "Rua a",
        numero: 123,
        cidade: "TechVille",
        estado: "SP"
    },
    hobbies: ["ler", "jogar", "programar"],
    status: "Online"
};

console.log(newObj(dados))