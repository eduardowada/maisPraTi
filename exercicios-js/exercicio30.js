/*
30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz e os vetores criados.
*/
function CalculateSums() {
    let matrixM = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
    ];
    
    let SL = [0, 0, 0, 0, 0];
    let SC = [0, 0, 0, 0, 0];

    for (let i = 0; i < matrixM.length; i++) {
        for (let j = 0; j < matrixM.length; j++) {
            SL[i] += matrixM[i][j];
            SC[j] += matrixM[i][j];
        }
    }

    console.log("Matrix M:")
    for (let i = 0; i < matrixM.length; i++) {
        console.log(matrixM[i]);
    }

    console.log('')
    console.log('Sum of rows:', SL);

    console.log('')
    console.log('Sum of columns:', SC)
}
CalculateSums();

module.exports = CalculateSums;