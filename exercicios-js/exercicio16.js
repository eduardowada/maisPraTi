/*
 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
 (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
 depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/
function generateRandomNumbers() {
    let numbers = [];
    
    for (let i = 0; i < 20; i++) {
        let randomNumber = Math.floor(Math.random()*100);
        numbers.push(randomNumber);
    }

    console.log("Generated numbers: ", numbers.join(", "))

    numbers.sort((a, b) => a - b);

    console.log("")
    return numbers.join(", ");
}

console.log("Sorted numbers: ",generateRandomNumbers());

module.exports = generateRandomNumbers;