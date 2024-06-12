/*
Desenvolva um programa que leia o primeiro termo e a razão de uma PA(Progressão
 Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
 valores da sequência.
*/
const prompt = require('prompt-sync')();

function progressaoAritmetica (numero, termo) {
    let somaNumeros = 0;
    let calculo = 0;
    let j = 1

    do {
        numero = parseFloat(prompt("Digite o primeiro termo da PA: "))
    } while (isNaN(numero));

    do {
        termo = parseFloat(prompt("Digite a razão da PA: "))
    } while (isNaN(termo));

    for (let i = 0; i < 10; i++) {
        calculo = numero + (termo * i);
        somaNumeros += calculo
        console.log(`${j}º termo: ${numero} + ${termo} * ${i} = ${calculo}`);
        j++;
    }

    return `A soma dos números é de ${somaNumeros}`
}

console.log(progressaoAritmetica());

module.exports = progressaoAritmetica;