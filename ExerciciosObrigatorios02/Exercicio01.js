// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário

function ehDataValidaa(dia, mes, ano) {
    if (dia < 1 || dia > 31 || mes < 1 || mes > 12) return false;

    const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

    const diasPorMes = {
        1: 31, 2: bissexto ? 29 : 28, 3: 31,
        4: 30, 5: 31, 6: 30,
        7: 31, 8: 31, 9: 30,
        10: 31, 11: 30, 12: 31
    };

    return dia <= diasPorMes[mes];
    // Se o dia informado for menor ou igual ao número de dias permitidos naquele mês, retorna true.
}


// jan   fev  mar  abr   maio  jun   jul   agos  set   out   nov   dez
// 01    02   03   04     05   06    07     08    09    10   11   12

//  Meses com 31 dias
// 01 03 05 07 08 10 12

// Meses com 30 dias
//04 06 09 11

// datas validas
console.log("Datas validas")
console.log(ehDataValidaa(31, 1, 2023));  // Janeiro, 31 dias
console.log(ehDataValidaa(30, 4, 2023));  // Abril, 30 dias
console.log(ehDataValidaa(29, 2, 2024));  // Fevereiro em ano bissexto
console.log(ehDataValidaa(28, 2, 2023));  // Fevereiro em ano não bissexto
console.log(ehDataValidaa(31, 12, 2025)); // Dezembro, 31 dias

// Datas Invalidas

console.log("Datas invalidas")
console.log(ehDataValidaa(31, 4, 2023));  // Abril só tem 30 dias
console.log(ehDataValidaa(30, 2, 2023));  // Fevereiro 2023 não é bissexto
console.log(ehDataValidaa(29, 2, 2023));  // 2023 não é bissexto
console.log(ehDataValidaa(32, 1, 2023));  // Janeiro só vai até 31
console.log(ehDataValidaa(0, 5, 2023));   // Dia zero não existe
console.log(ehDataValidaa(15, 13, 2023)); // Mês 13 não existe


