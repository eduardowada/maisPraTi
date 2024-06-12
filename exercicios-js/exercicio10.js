/*
Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
 cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
 a) O somatório entre todos os valores;
 b) Qual foi o menor valor digitado;
 c) A médiaentre todos os valores;
 d) Quantos valores são pares.
*/
const prompt = require('prompt-sync')();

function leitorDeNumeros (numeros) {
    let numero;
    let somaNumeros = 0;
    let menorNumero = Infinity;
    let media = 0;
    let totalDeNumeros = 0;
    let numerosPares = 0;
    let continuar;

    do {
        numero = parseFloat(prompt("Insira um número: "));

        while (isNaN(numero) || numero < 0) {
            numero = parseFloat(prompt("Insira um número válido: "));
        }

        somaNumeros += numero;

        if (menorNumero > numero) {
            menorNumero = numero;
        }

        if (numero % 2 === 0) {
            numerosPares++;
        }

        totalDeNumeros++;
        continuar = prompt("Você quer inserir mais números? (Digite S para continuar ou qualquer outra coisa para encerrar): ").toUpperCase()
    } while (continuar === "S");

    media = somaNumeros / totalDeNumeros

    return `a) A soma de todos os números digitados é de: ${somaNumeros}.\nb) O menor valor digitado foi ${menorNumero}.\nc) A média entre todos os valores é de ${media}.\nd) O número de valores pares é igual a: ${numerosPares}`
}

console.log(leitorDeNumeros());

module.exports = leitorDeNumeros;