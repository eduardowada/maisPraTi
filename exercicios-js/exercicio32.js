/*
32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a matriz lida e a modificada
*/
function matrix32() {
    function generateMatrix(rows, cols) {
        let matrix = [];
        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < cols; j++) {
                let randomValue = Math.floor(Math.random() * 201) - 100;
                row.push(randomValue);
            }
            matrix.push(row);
        }
        
        return matrix;
    }

    let matrix = generateMatrix(12, 13)

    console.log("Generated Matrix: ")
    matrix.forEach(row => console.log("[",row.join(', '),"]"))

    let processedMatrix = matrix.map(row => {
        let maxAbs = Math.max(...row.map(Math.abs));
        return row.map(value => (value / maxAbs).toFixed(2));
    });

    console.log("Modified matrix:");
    processedMatrix.forEach(row => console.log("[",row.join(', '),"]"))
}

matrix32();

module.exports = matrix32;