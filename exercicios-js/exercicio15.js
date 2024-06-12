/*
15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
 final, mostre quais são os números pares que foram digitados e em que posições eles
 estão armazenados.
*/
const prompt = require('prompt-sync')();

function saveNumbers (number) {
    let numbers = [];
    console.log("--------------------------")

    for (let i = 0; i < 10; i++) {
        do {
            number = parseInt(prompt("Enter a integer number: "));
        } while (isNaN(number));

        numbers.push(number);
    }

    console.log("")
    for (let i = 0; i < 10; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(`O ${numbers[i]} é par e está na posição ${i}`);
        }
    }
    console.log("")

    return numbers;
}

console.log("The 10 numbers entered were: ", saveNumbers())

module.exports = saveNumbers;