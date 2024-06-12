/*
34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as multiplicações
*/
function matrix34() {
    function generateMatrix(size) {
        let matrix = [];

        for (let i = 0; i < size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
                let randomValue = (Math.random() * 100).toFixed(2);
                row.push(randomValue);
            }
            matrix.push(row)
        }

        return matrix;
    }

    let matrix = generateMatrix(50);

    console.log("Generate matrix: ")
    for (let i = 0; i < matrix.length; i++) {
        console.log("[",matrix[i].join(' '),"]");
    }

    for (let i = 0; i < matrix.length; i++) {
        let diagonalElement = matrix[i][i];
        for (let j = 0; j < matrix.length; j++) {
            matrix[i][j] = (matrix[i][j] * diagonalElement).toFixed(2);
        }
    }

    console.log("\nNew matrix:")
    for (let i = 0; i < matrix.length; i++) {
        console.log("[",matrix[i].join(' '),"]");
    }
}

matrix34();

module.exports = matrix34;