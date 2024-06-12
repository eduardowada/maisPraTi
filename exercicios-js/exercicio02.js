/*
2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h , exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/
const prompt = require('prompt-sync')();

function calcularMulta(velocidade) {
    let multa;
    let veredito;
    velocidade = parseFloat(prompt("Qual é a velocidade do carro em km/h? "));
    while (isNaN(velocidade) || velocidade < 0) {
        console.log("Insira uma velocidade válida.");
        velocidade = parseFloat(prompt("Qual é a velocidade do carro em km/h? "));
        }
    if (velocidade === 0) {
        multa = 0;
        veredito = "O carro está parado, portanto você não foi multado";
    } else if (velocidade <= 80) {
        multa = 0;
        veredito = "Sua velocidade está dentro do limite de 80km/h, portanto você não foi multado";
    } else {
        multa = (velocidade - 80) * 5
        veredito = `Multado! Você está acima do limite de 80 km/h, o valor da sua multa é de R$${multa}`
    }

    return veredito
}
    
console.log(calcularMulta())

module.exports = calcularMulta;
