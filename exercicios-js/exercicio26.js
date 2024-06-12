/*
26. Dadas duas matrizes numéricas A[1.3,1.5] e B[1.5,1.3], calcular a matriz produto P[1 .3,1 .3].
*/
function timesMatrix() {
    let matrix1 = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15]
    ];

    let matrix2 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12],
        [13, 14, 15]
    ];

    timesM = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    let rowsMatrix1 = matrix1.length;
    let colsMatrix1 = matrix1[0].length;
    let colsMatrix2 = matrix2[0].length;

    for (let i = 0; i < rowsMatrix1; i++) {
        for (let j = 0; j < colsMatrix2; j++) {
            for (let k = 0; k < colsMatrix1; k++) {
                timesM[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    console.log("Product Matrix: ");
    timesM.forEach(row => {
        console.log(row)
    });
}

timesMatrix();

module.exports = timesMatrix;
