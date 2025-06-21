// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) {
    let timer = null;

    return function (...args) {
        // Cancela a execução anterior, se houver
        clearTimeout(timer);

        // Define uma nova execução para depois do "delay"
        timer = setTimeout(() => {
            fn.apply(this, args); // Executa a função original com os mesmos argumentos
        }, delay);
    };
}

// Exemplo de uso:
function pesquisar(texto) {
    console.log("Buscando por:", texto);
}

// Cria uma versão com debounce da função pesquisar
const pesquisaDebounced = debounce(pesquisar, 2000);

// Simulação de digitação: só vai buscar após 2 segundos sem digitar
pesquisaDebounced("J");
pesquisaDebounced("Ja");
pesquisaDebounced("Jav");
pesquisaDebounced("Java");
pesquisaDebounced("JavaS");
pesquisaDebounced("JavaSc");
pesquisaDebounced("JavaScr");
pesquisaDebounced("JavaScri");
pesquisaDebounced("JavaScrip");
pesquisaDebounced("JavaScript");

// Só a última chamada ("JavaScript") será executada, 2 segundos depois da última digitação
