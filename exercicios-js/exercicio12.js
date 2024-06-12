/*
12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
 Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/

function fibonacciSequence (n) {
    let sequence = [1, 1];

    for (let i = 2; i < n; i++) {
      let nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }

    return sequence;
}

console.log("The first 10 numbers of the Fibonacci Sequence are: ",fibonacciSequence(10));

module.exports = fibonacciSequence;