// 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
// repetição. Escrever cada um deles no formato HH.MM.SS.


const prompt = require('prompt-sync')()



function validardata(horas) {

    for (let horario of horas) {
        let partes = horario.split('.');

        if (partes.length !== 3) {
            console.log(`Formato inválido: ${horario}`);

        }
        let [h, m, s] = partes.map(Number);
        if (isNaN(h) || isNaN(m) || isNaN(s)) {
            console.log(`Valores inválidos: ${horario}`);
        }
        if (h < 0 || h > 23 || m < 0 || m > 59 || s < 0 || s > 59) {
            console.log(` Data invalida ${horario}`)
        } else {
            console.log(` Data valida ${horario}`)
        }
    }
}

function hora() {
    let horas = [];
    let horario;
    for (i = 0; i < 5; i++) {
        horario = prompt("Digite um horario HH.MM.SS.  (Hora.Minutos.segundos)")
        horas.push(horario)

    }
    console.log(horas)
    validardata(horas)
}


const horariosDeTeste = [
    "12.30.45",   // válido
    "00.00.00",   // válido
    "23.59.59",   // válido
    "01.05.09",   // válido
    "09.15.30",   // válido
    "24.00.00",   // inválido (hora 24)
    "12.60.00",   // inválido (minuto 60)
    "10.30.60",   // inválido (segundo 60)
    "abc.def.ghi",// inválido (letras)
    "12.30",      // inválido (faltando parte)
    "12.30.45.10",// inválido (partes demais)
    "..",         // inválido (vazio)
    "12:30:45"    // inválido (separador errado)
];

validardata(horariosDeTeste)


//  hora() caso queira implementar o horario manuamente para teste é so chamar hora()

