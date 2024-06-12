/*
23. Criar e imprimir a matriz identidade MI[1.7,1.7] em que todos os elementos da diagonal principal são iguais a 1 e os demais são nulos.
*/
function createIdentityMatrix(size) {
    let IdentityMatrix = [];
    size = 7
    
    console.log('')
    console.log("Printing a Identity Matrix 7x7: ")
    console.log('')
    for (let i = 0; i < size; i++) {
        let line = [];
        for (let j = 0; j < size; j++) {
            line.push(0)
        }
        IdentityMatrix.push(line)
    }

    for (let i = 0; i < size; i++) {
        IdentityMatrix[i][i] = 1
    }

    for (let i = 0; i < size; i++) {
        console.log(IdentityMatrix[i].join(' '))
    }

    console.log('')
}

createIdentityMatrix();

module.exports = createIdentityMatrix;