/*
50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema deverá ser capaz de interagir com o usuário através do console do navegador e manter um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as informações. Não é necessário interface gráfica, apenas funcionalidade lógica.

1. Estrutura de Dados:
-Hotel: Cada hotel deve ser um objeto com propriedades para id, nome, cidade, quartos totais e quartos disponiveis.
-Reservas: Cada reserva deve ser umobjeto contendo idReserva, idHotel, enomeCliente.

2. Funcionalidades:
-Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
-Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis disponíveis em uma cidade específica.
-Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso deve diminuir o número de quartos disponiveis do hotel.
-Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve aumentar o número de quartos disponiveis no hotel correspondente.
-Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.

3. Regras de Negócio:
-Um hotel só pode aceitar reservas se houver quartos disponíveis.
-As reservas devem ser identificadas por um ID único e associadas a um único hotel.

4. Desafios Adicionais (Opcionais):
-Implementar uma função de check-in e check-out que atualize a disponibilidade de quartos.
-Gerar relatórios de ocupação para um hotel.
-Permitir que o usuário avalie o hotel após a estadia, e armazenar essas avaliações dentro do objeto do hotel
*/
const prompt = require('prompt-sync')();

function sistemaDeReservaDeHoteis() {
    let hoteis = [];
    let reservas = [];
    let nextHotelId = 1;
    let nextReservaId = 1;

    function adicionarHotel() {
        const nome = prompt("Digite o nome do hotel:");
        const cidade = prompt("Digite a cidade do hotel:");
        const quartosTotais = parseInt(prompt("Digite o número total de quartos:"), 10);

        const hotel = {
            id: nextHotelId++,
            nome: nome,
            cidade: cidade,
            quartosTotais: quartosTotais,
            quartosDisponiveis: quartosTotais,
            avaliacoes: []
        };

        hoteis.push(hotel);
        console.log(`Hotel ${nome} adicionado com sucesso!`);
    }

    function buscarHoteisPorCidade() {
        const cidade = prompt("Digite a cidade para buscar hotéis:");
        const hoteisNaCidade = hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidade.toLowerCase());

        if (hoteisNaCidade.length > 0) {
            let mensagem = `Hotéis disponíveis em ${cidade}:\n`;
            hoteisNaCidade.forEach(hotel => {
                mensagem += `ID: ${hotel.id}, Nome: ${hotel.nome}, Quartos Disponíveis: ${hotel.quartosDisponiveis}\n`;
            });
            console.log(mensagem);
        } else {
            console.log(`Não há hotéis disponíveis em ${cidade}.`);
        }
    }

    function fazerReserva() {
        const idHotel = parseInt(prompt("Digite o ID do hotel para fazer a reserva:"), 10);
        const nomeCliente = prompt("Digite o nome do cliente:");

        const hotel = hoteis.find(h => h.id === idHotel);

        if (hotel && hotel.quartosDisponiveis > 0) {
            hotel.quartosDisponiveis--;
            const reserva = {
                idReserva: nextReservaId++,
                idHotel: idHotel,
                nomeCliente: nomeCliente
            };
            reservas.push(reserva);
            console.log(`Reserva feita com sucesso para ${nomeCliente} no hotel ${hotel.nome}.`);
        } else {
            console.log(`Não foi possível fazer a reserva. Hotel não encontrado ou sem quartos disponíveis.`);
        }
    }

    function cancelarReserva() {
        const idReserva = parseInt(prompt("Digite o ID da reserva para cancelar:"), 10);
        const reservaIndex = reservas.findIndex(r => r.idReserva === idReserva);

        if (reservaIndex !== -1) {
            const reserva = reservas[reservaIndex];
            const hotel = hoteis.find(h => h.id === reserva.idHotel);

            if (hotel) {
                hotel.quartosDisponiveis++;
                reservas.splice(reservaIndex, 1);
                console.log(`Reserva de ID ${idReserva} cancelada com sucesso.`);
            } else {
                console.log(`Hotel associado à reserva não encontrado.`);
            }
        } else {
            console.log(`Reserva de ID ${idReserva} não encontrada.`);
        }
    }

    function listarReservas() {
        if (reservas.length > 0) {
            let mensagem = `Lista de reservas:\n`;
            reservas.forEach(reserva => {
                const hotel = hoteis.find(h => h.id === reserva.idHotel);
                mensagem += `ID Reserva: ${reserva.idReserva}, Cliente: ${reserva.nomeCliente}, Hotel: ${hotel ? hotel.nome : 'N/A'}\n`;
            });
            console.log(mensagem);
        } else {
            console.log(`Não há reservas no sistema.`);
        }
    }

    function avaliarHotel() {
        const idHotel = parseInt(prompt("Digite o ID do hotel para avaliar:"), 10);
        const nomeCliente = prompt("Digite o nome do cliente:");
        const nota = parseInt(prompt("Digite a nota (1 a 5):"), 10);
        const comentario = prompt("Digite o comentário:");

        const hotel = hoteis.find(h => h.id === idHotel);

        if (hotel) {
            hotel.avaliacoes.push({ cliente: nomeCliente, nota: nota, comentario: comentario });
            console.log(`Avaliação adicionada com sucesso ao hotel ${hotel.nome}.`);
        } else {
            console.log(`Hotel de ID ${idHotel} não encontrado.`);
        }
    }

    function relatorioOcupacao() {
        const idHotel = parseInt(prompt("Digite o ID do hotel para gerar relatório de ocupação:"), 10);

        const hotel = hoteis.find(h => h.id === idHotel);

        if (hotel) {
            const ocupacao = ((hotel.quartosTotais - hotel.quartosDisponiveis) / hotel.quartosTotais) * 100;
            let mensagem = `Relatório de Ocupação do Hotel ${hotel.nome}:\n`;
            mensagem += `Quartos Totais: ${hotel.quartosTotais}\n`;
            mensagem += `Quartos Disponíveis: ${hotel.quartosDisponiveis}\n`;
            mensagem += `Ocupação: ${ocupacao.toFixed(2)}%\n`;
            const totalNotas = hotel.avaliacoes.reduce((acc, av) => acc + av.nota, 0);
            const avaliacaoMedia = hotel.avaliacoes.length > 0 ? totalNotas / hotel.avaliacoes.length : 0;
            mensagem += `Avaliação Média: ${avaliacaoMedia.toFixed(2)} de 5\n`;
            console.log(mensagem);
        } else {
            console.log(`Hotel de ID ${idHotel} não encontrado.`);
        }
    }

    function menu() {
        let opcao;
        do {
            opcao = prompt(
                "Sistema de Reserva de Hotéis\n" +
                "1. Adicionar Hotel\n" +
                "2. Buscar Hotéis por Cidade\n" +
                "3. Fazer Reserva\n" +
                "4. Cancelar Reserva\n" +
                "5. Listar Reservas\n" +
                "6. Avaliar Hotel\n" +
                "7. Relatório de Ocupação\n" +
                "8. Sair\n" +
                "Escolha uma opção:"
            );

            switch (parseInt(opcao, 10)) {
                case 1:
                    adicionarHotel();
                    break;
                case 2:
                    buscarHoteisPorCidade();
                    break;
                case 3:
                    fazerReserva();
                    break;
                case 4:
                    cancelarReserva();
                    break;
                case 5:
                    listarReservas();
                    break;
                case 6:
                    avaliarHotel();
                    break;
                case 7:
                    relatorioOcupacao();
                    break;
                case 8:
                    console.log("Saindo do sistema...");
                    break;
                default:
                    console.log("Opção inválida! Tente novamente.");
            }
        } while (parseInt(opcao, 10) !== 8); // Certifique-se de que a condição de saída está correta
    }

    menu();
}

sistemaDeReservaDeHoteis();

module.exports = sistemaDeReservaDeHoteis;
