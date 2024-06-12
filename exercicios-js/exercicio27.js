/*
27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura, multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em um vetor V(36). Escrever o vetor V no final.
*/
const prompt = require('prompt-sync')();

function multiplyMatrix() {
    let matrix = [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35, 36]
    ];

    let vector = [];

    let num = parseFloat(prompt("Enter the number that will multiply the matrix: "));
    while (isNaN(num)) {
        num = parseFloat(prompt("Invalid number. Enter the number that will multiply the matrix: "));
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            vector.push(matrix[i][j] *  num);
        }
    }

    console.log('')
    console.log("All vector values: \n");
    for (let i = 0; i < vector.length; i++) {
        console.log(`position ${i + 1}: ${vector[i]}`)
    }
}

multiplyMatrix();

module.exports = multiplyMatrix;