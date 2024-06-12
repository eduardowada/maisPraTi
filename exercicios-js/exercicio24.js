/*
24. Dada uma matriz M[1.6,1.8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M.
*/
function countNegativePerRow(matrix) {
    let vectorC = [];
    matrix = [
        [4, -2, -1, 5, 6, -3, 8, -7],
        [-1, -1, -2, -3, -4, -5, -6, -7],
        [1, 2, 3, 4, 5, 6, 7, 8],
        [-1, 2, -3, 4, -5, 6, -7, 8],
        [0, -1, 2, -3, 4, -5, 6, -7],
        [-1, -1, -1, -1, -1, -1, -1, -1]
    ];

    for (let i = 0; i < matrix.length; i++) {
        let countNegatives = 0
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < 0) {
                countNegatives++;
            }
        }
        vectorC.push(countNegatives)
    }

    return vectorC;
}

console.log(countNegativePerRow());

module.exports = countNegativePerRow;