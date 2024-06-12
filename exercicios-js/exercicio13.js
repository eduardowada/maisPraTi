/*Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
dasequência de Fibonacci.
*/

function fibonacciSequence2 (n) {
    let sequence = [1, 1];

    for (let i = 2; i < n; i++) {
      let nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }

    return sequence;
}

console.log("The first 10 numbers of the Fibonacci Sequence are: ",fibonacciSequence2(15));

module.exports = fibonacciSequence2;