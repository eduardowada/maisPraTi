/*
Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos da diagonal principal com a média dos elementos da diagonal secundária.
*/
function matrix33() {
    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    console.log("Matrix:")
    matrix.forEach(row => console.log(row))

    let secondaryDiagonal = matrix[0][2] + matrix[1][1] + matrix[2][0];
    let averageSecondaryDiagonal = secondaryDiagonal / 3;

    matrix[0][0] *= averageSecondaryDiagonal;
    matrix[1][1] *= averageSecondaryDiagonal;
    matrix[2][2] *= averageSecondaryDiagonal;

    console.log("\nNew matrix:");
    matrix.forEach(row => console.log(row));
}

matrix33();

module.exports = matrix33;