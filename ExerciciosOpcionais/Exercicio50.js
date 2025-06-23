// 50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
// deverá ser capaz de interagir com o usuário através do console do navegador e manter
// um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
// informações. Não é necessário interface gráfica, apenas funcionalidade lógica.

// 1. Estrutura de Dados:
// ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
// cidade, quartos totais e quartos disponiveis.
// ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
// nomeCliente.

// 2. Funcionalidades:
// ○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
// ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
// disponíveis em uma cidade específica.
// ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
// deve diminuir o número de quartos disponiveis do hotel.
// ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
// aumentar o número de quartos disponiveis no hotel correspondente.
// ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
// cliente.

// 3. Regras de Negócio:
// ○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
// ○ As reservas devem ser identificadas por um ID único e associadas a um
// único hotel.
// 4. Desafios Adicionais (Opcionais):
// ○ Implementar uma função de check-in e check-out que atualize a
// disponibilidade de quartos.
// ○ Gerar relatórios de ocupação para um hotel.
// ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
// avaliações dentro do objeto do hotel.

const prompt = require('prompt-sync')()

function criarHotel() {
    //  cria o hotel
    let id = hoteis.length + 1
    const hotel = {
        'id': id,
        'nome': prompt('Digite o nome do hotel:'),
        'cidade': prompt('Digite a cidade'),
        'quartos': Number(prompt('Digite a quantidade de quartos')),
        'quartosDisponiveis': 0,
        'avaliacoes': []
    }
    hotel['quartosDisponiveis'] = hotel['quartos']
    hoteis.push(hotel)
    return hotel
}

function criarPessoa() {
    console.log(` CADASTRO USUARIO:`)
    let id = pessoas.length + 1
    let nome = prompt('Primeiro nome:')
    let sobrenome = prompt('Sobrenome:')
    let aniversario = prompt('Digite a data do seu nascimento DD-MM-YY')//verificar se é uma data valida
    let telefone = prompt('Telefone: "11-99999-9999"')// verificar se é valido
    let cpf = prompt('CPF: 111.111.111-12')// verificar se é valido e se é unico

    // verificar dados antes de criar a pessoa
    const pessoa = {
        'id': id,
        'nome': nome,
        'sobrenome': sobrenome,
        'aniversario': aniversario,
        'telefone': telefone,
        'cpf': cpf
    }
    pessoas.push(pessoa)
    return pessoa
}

function Buscarhoteis() {
    //liste todos os hotéis disponíveis em uma cidade específica.
    console.log('Hoteis Parceiros')
    console.table(hoteis)
}


// fazer para o outro o valor que o cliente vai ter que pagar sex, sab, dom mais caro

function criarReserva() {
    console.log('CRIANDO RESERVA')
    console.log('LISTA HOTEIS DISPONIVEL')
    hoteis.forEach(hotel => {
        console.log(`
            NUMERO : ${hotel.id}
            NOME: ${hotel.nome}
            CIDADE: ${hotel.cidade}
            QUARTOS: ${hotel.quartos}
            QUARTOS DISPONIVEIS: ${hotel.quartosDisponiveis}
            `)
    });
    console.log('pessoa', pessoas)
    console.table(hoteis)
    // tem que mostrar os hoteis de forma melhor 
    let escolha = Number(prompt('DIGITE O NÚMERO DO HOTEL QUE DESEJA'))
    let quartosReserva = Number(prompt('DIGITE A QUANTIDADE DE QUARTOS QUE DESEJA'))
    let quantidadeDias = Number(prompt('DIGITE A QUANTIDADE DE DIAS QUE DESEJA'))
    let idReserva = reservas.length + 1
    let idpessoa;
    let addPessoa;
    if (hoteis[escolha - 1].quartosDisponiveis < quartosReserva) {
        console.log(`Não tem quartos disponivel o suficiente`)
        criarReserva(reservas, hoteis, pessoas)
    } else {
        let cpf = prompt('Para confirmar sua reserva confirma seu cpf')
        pessoas.forEach(pessoa => {
            if (pessoa.cpf === cpf) {
                console.log('Voce esta cadastrado')
                idpessoa = pessoa.id
                // se cair aqui entao a pessoa ta cadastrada
            } else {

            }
        });
        if (idpessoa === undefined) {
            console.log('CADASTRO NÃO ENCONTRADO')
            // se cair aqui o cpf nao foi cadastrado
            // entao teria que chamar a funcao criar pessoa e adicionar a pessoa no cadastro
            addPessoa = criarPessoa()
            idpessoa = addPessoa.id
        }

        let reserva = {
            'idReserva': idReserva,
            'idPessoa': idpessoa,
            'idHotel': hoteis[escolha - 1].id,
            'quantidadeDeDias': quantidadeDias,
            'quantidadeQuartos': quartosReserva
        }
        // esse calculo esta errado, tenho que consertar
        hoteis[escolha - 1].quartosDisponiveis = hoteis[escolha - 1].quartosDisponiveis - quartosReserva
        reservas.push(reserva)
        console.table(hoteis)
        return reserva
    }
}


function cancelarReserva() {
    //Permitir que um usuário cancele uma reserva
    let cpf = prompt('Digite seu cpf:')
    let pessoaID;
    let indexPessoa;
    pessoas.forEach(pessoa => {
        if (pessoa.cpf === cpf) {
            pessoaID = pessoa.id
            console.log('CPF encontrado para confirmar o cancelamento da reserva')
            console.log('pessoaID = pessoa.id', pessoaID = pessoa.id)
        }
    })
    reservas.forEach((reserva, index) => {
        console.log('reserva', reserva)
        console.log('idPessoa === reserva.idPessoa', reserva.idPessoa)
        if (pessoaID === reserva.idPessoa) {
            // se achar excluiu
            indexPessoa = index
            console.log('RESERVA ENCONTRADA')
            console.log('indexPessoa', indexPessoa)
            console.log('index', index)

        }
        reservas.splice(indexPessoa)
        console.log('RESERVAS')
        console.log(reservas)
    }
    )
    //
    console.log(reservas)




}

function listarReserva() {
    console.log('RESERVAS')
    console.table(reservas)
    //Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.
}






function checkInHotel(hoteis, pessoas, reservas) {
    //     Check-in:
    // É o momento em que o hóspede chega ao hotel e registra sua chegada, geralmente fornecendo informações pessoais e da reserva. 
    // Inclui a apresentação de documentos e a entrega das chaves ou cartão de acesso ao quarto. 
    // Pode ser feito tanto presencialmente na recepção quanto online, dependendo do hotel. 
    // Normalmente tem um horário de início definido pelo hotel. 
}
function chechOut(reservas, hoteis, pessoas) {

    // Check-out:
    // É o momento em que o hóspede deixa o hotel, devolvendo as chaves ou cartão e encerrando a estadia. 
    // Geralmente inclui o pagamento de eventuais despesas adicionais, como frigobar ou serviços extras. 
    // Também pode ser realizado online, com o envio da fatura e pagamento por meios eletrônicos. 
    // Normalmente tem um horário limite de saída definido pelo hotel. 
}

function menu() {
    do {
        console.log(
            ` REDES DE  HOTEIS PARCEIROS
        O- DIGITE 0 PARA ENCERRAR
        1- ADICIONAR HOTEL
        2- BUSCAR HOTEL 
        3- FAZER RESERVA
        4- CANCELAR RESERVA
        5- LISTAR RESERVAS
        6- CHECK IN
        7- CHECKOUT   
        `
        )
        opcao = Number(prompt('Escolha uma opcao'))
        if (opcao < 0 || opcao > 7) {
            console.log('Opção Invalida!!!')
        } else {
            return opcao
        }
    } while (opcao != 0)
}



let opcao;
const hoteis = [
    {
        'id': 1,
        'nome': 'HOTEL UM',
        'cidade': 'BELO HORIZONTE',
        'quartos': 5,
        'quartosDisponiveis': 5,
        'avaliacoes': []
    },
    {
        'id': 2,
        'nome': 'HOTEL DOIS',
        'cidade': 'BELO HORIZONTE',
        'quartos': 5,
        'quartosDisponiveis': 5,
        'avaliacoes': []
    },

    {
        'id': 3,
        'nome': 'HOTEL TRES',
        'cidade': 'IBIRITE',
        'quartos': 5,
        'quartosDisponiveis': 5,
        'avaliacoes': []
    },


]
const reservas = [{
    'idReserva': 2,
    'idPessoa': 2,
    'idHotel': 2,
    'quantidadeDeDias': 2,
    'quantidadeQuartos': 2
},
{
    'idReserva': 3,
    'idPessoa': 1,
    'idHotel': 2,
    'quantidadeDeDias': 2,
    'quantidadeQuartos': 2
}]
const pessoas = [
    {
        'id': 1,
        'nome': 'Maria',
        'sobrenome': 'Souza',
        'aniversario': '11-11-1980',
        'telefone': '11-9999-9999',
        'cpf': '111.222.333-44'
    },
    {
        'id': 2,
        'nome': 'Claudia',
        'sobrenome': 'Souza',
        'aniversario': '11-11-1980',
        'telefone': '31-0000-0000',
        'cpf': '222.333.111-44'
    },
]
//let pessoa = criarPessoa(pessoas)

//pessoas.push(pessoa)


opcao = menu()
while (opcao !== 0) {
    switch (opcao) {
        case 1:
            let hotel = criarHotel()
            //checar se o hotel ja existe 
            //hoteis.push(hotel)

            break;
        case 2: Buscarhoteis()

            break;
        case 3:
            let reserva = criarReserva()
            //reservas.push(reserva)
            // agora tem que diminuir os numeros de quartos do hotel
            // console.log('RESERVA CONCLUIDA')
            // console.log('reserva.idHotel', reserva.idHotel)
            // console.log('reserva.quantidadedeQuartos', reserva.quantidadeQuartos)
            break;
        case 4: cancelarReserva(reservas, hoteis)

            break;
        case 5: listarReserva(reservas)

            break;
        case 6: checkInHotel(hoteis, pessoas, reservas)

            break;
        case 7: chechOut(reservas, hoteis, pessoas)

            break;
        default:
            console.log('PROGRAMA ENCERRADO!!!')


    }
    opcao = menu()
}

