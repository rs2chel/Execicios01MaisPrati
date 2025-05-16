//Um programa que classifica a idade de uma pessoa em categorias 
// (criança,adolescente, adulto, idoso) com base no valor fornecido, 
// utilizando uma estrutura de controle if-else.

const prompt = require('prompt-sync')();

let classificacao;

let idade = Number(prompt("Digite sua idade:"));

if (idade < 0) {
    classificacao = "feto";
}
else if (idade >= 0 && idade <= 12) {
    classificacao = "criança";
}
else if (idade > 12 && idade < 18) {
    classificacao = "adolescente";
}
else if (idade >= 18 && idade < 65) {
    classificacao = "adulto";
}
else if (idade >= 65) {
    classificacao = "idoso";
}

console.log("Uma pessoa com " + idade + " é classificada como " + classificacao);