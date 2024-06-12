/*
29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.
*/
function matrixOperations() {
    let matrixM = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
    ];

    let sumRow4 = 0;
    let sumCol2 = 0;
    let sumDiagonal = 0;
    let sumAll = 0;

    for (let j = 0; j < matrixM[3].length; j++) {
        sumRow4 += matrixM[3][j];
    }

    for (let i = 0; i < matrixM.length; i++) {
        sumCol2 += matrixM[i][1];
    }

    for (let i = 0; i < matrixM.length; i++) {
        sumDiagonal += matrixM[i][i];
    }

    for (let i = 0; i < matrixM.length; i++) {
        for (let j = 0; j < matrixM.length; j++) {
            sumAll += matrixM[i][j];
        }
    }

    console.log("Matrix M: ");
    matrixM.forEach(row => {
        console.log(row)
    });

    console.log('');
    console.log("Sum of elements in line 4:", sumRow4);
    console.log('');
    console.log("Sum of elements in column 2:", sumCol2);
    console.log('');
    console.log("Sum of elements on the Diagonal:", sumDiagonal);
    console.log('');
    console.log("Sum of all elements:", sumAll);
}

matrixOperations();

module.exports = matrixOperations;