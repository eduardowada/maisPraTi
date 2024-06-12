/*
8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
 podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
 sistema funciona assim:
 - até 10h de atividade no mês: ganha 2 pontos por hora
 - de 10h até 20h de atividade no mês: ganha 5 pontos por hora
 - acima de 20h de atividade no mês: ganha 10 pontos por hora
 - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
 Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
 Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
 */
const prompt = require('prompt-sync')();

function horasDeAtividade (horas) {
    let pontos;
    let recompensa;

    do {
        horas = parseInt(prompt("Insira o número de horas de atividade que você teve esse mês: "));
    } while (isNaN(horas) || horas < 0);

    if (horas <= 10) {
        pontos = 2 * horas;
    } else if (horas > 10 && horas <= 20) {
        pontos = 5 * horas;
    } else {
        pontos = 10 * horas;
    }

    recompensa = pontos * 0.05

    return `Você fez ${horas} horas de atividade física esse mês, portanto ganhou ${pontos} pontos, que te rendeu R$${recompensa.toFixed(2)}`
}

console.log(horasDeAtividade())

module.exports = horasDeAtividade;