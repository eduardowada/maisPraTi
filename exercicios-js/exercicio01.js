/*
1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.
*/
const prompt = require('prompt-sync')();

function reducaoDeVida(cigarrosPorDia, anosFumando) {
    console.log("Inserir números inteiros para cada resposta")
    //Coleta de dados, usei o while para garantir entrada somente de números
    cigarrosPorDia = parseInt(prompt("Qual a média de cigarros que você fuma por dia? "));
    while (cigarrosPorDia <= 0 || isNaN(cigarrosPorDia)) {
        console.log("Insira um número maior que zero.");
        cigarrosPorDia = parseInt(prompt("Qual a média de cigarros que você fuma por dia? "));
    }

    anosFumando = parseInt(prompt("Há quantos anos você fuma? "))
    while (anosFumando <= 0 || isNaN(anosFumando)) {
        console.log("Insira um número maior que zero");
        anosFumando = parseInt(prompt("Há quantos anos você fuma? "));
    }

    //Cálculo
    var totalDeCigarros = cigarrosPorDia * anosFumando * 365
    var tempoPerdidoMinutos = totalDeCigarros * 10
    var tempoPerdidoDias = tempoPerdidoMinutos / (24 * 60);

    return `Você perdeu aproximadamente ${tempoPerdidoDias.toFixed(0)} dias de vida`;
}

console.log(reducaoDeVida())

module.exports = reducaoDeVida;
