/*
 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.
*/
const prompt = require('prompt-sync')();

function calcularPassagem (dist) {
    let preco
    let distancia = parseFloat(prompt("Insira a distância em km: "))
    while (distancia < 0 || isNaN(distancia)) {
        console.log("Digite uma distância válida.");
        distancia = parseFloat(prompt("Insira a distância em km: "));
    }
    if (distancia <= 200) {
        preco = distancia * 0.5;
    } else {
        preco = distancia * 0.45;
    }
    return preco
}

console.log(`O preço da passagem é de R$`, calcularPassagem());

module.exports = calcularPassagem;