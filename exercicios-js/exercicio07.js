/*
 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
 carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
 cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
 (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
 mostre o preço a ser pago de acordo com os dados a seguir:
 Carros populares- Até 100 Km percorridos: R$ 0,20 por Km- Acima de 100Km percorridos: R$ 0,10 por Km
 Carros de luxo- Até 200 Km percorridos: R$ 0,30 por Km- Acima de 200Km percorridos: R$ 0,25 por Km
*/
const prompt = require('prompt-sync')();

function calcularAluguelCarros(categoria, numDias, kmPercorrido) {
    let AluguelPorDia;
    let AluguelPorKm;
    let AluguelTotal;

    do {
        categoria = parseInt(prompt("Digite 0 ou 1 para escolher a categoria do carro. (0 = popular, 1 = luxo): "));
    } while (isNaN(categoria) || categoria < 0 || categoria > 1);

    do {
        numDias = parseInt(prompt("Digite o número de dias: "));
    } while (isNaN(numDias) || numDias <= 0);

    do {
        kmPercorrido = parseFloat(prompt("Digite o número de km percorridos: "));
    }
    while (isNaN(kmPercorrido) || kmPercorrido < 0);

    if (categoria === 0) {
        AluguelPorDia = 90 * numDias;
        categoria = "popular";
        if (kmPercorrido <= 100) {
            AluguelPorKm = 0.2 * kmPercorrido;
            AluguelTotal = AluguelPorDia + AluguelPorKm;
        } else {
            AluguelPorKm = 0.1 * kmPercorrido;
            AluguelTotal = AluguelPorDia + AluguelPorKm;
        }
    } else {
        AluguelPorDia = 150 * numDias;
        categoria = "luxo";
        if (kmPercorrido <= 200) {
            AluguelPorKm = 0.3 * kmPercorrido;
            AluguelTotal = AluguelPorDia + AluguelPorKm;
        } else {
            AluguelPorKm = 0.25 * kmPercorrido;
            AluguelTotal = AluguelPorDia + AluguelPorKm;
        }
    }
    
    return `O carro da categoria ${categoria}, alugado por ${numDias} dias, andou ${kmPercorrido} km. O valor total do aluguel é de R$${AluguelTotal.toFixed(2)}`
}

console.log(calcularAluguelCarros());

module.exports = calcularAluguelCarros;