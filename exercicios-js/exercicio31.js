/*
31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros. Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo todos os elementos de V diferentes de A. Mostre os resultados.
*/
const prompt = require('prompt-sync')();

// Função para gerar uma matriz 30x30 de inteiros aleatórios entre 1 e 100
function matrix31() {
    function generateRandomMatrix(size) {
        let matrix = [];
        for (let i = 0; i < size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
                row.push(Math.floor(Math.random() * 100) + 1);
            }
            matrix.push(row);
        }
        return matrix;
    }

    // Função para contar os valores iguais a A e criar a matriz X
    function processMatrix(matrix, A) {
        let count = 0;
        let X = [];

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === A) {
                    count++;
                } else {
                    X.push(matrix[i][j]);
                }
            }
        }

        return { count, X };
    }

    // Função para imprimir a matriz
    function printMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '));
        }
    }


        let A = parseInt(prompt("Enter an integer A(between 1 and 100): "));
        while (isNaN(A) || A < 0 || A > 100) {
            A = parseInt(prompt("Enter an integer A(between 1 and 100): "));
        }
        let V = generateRandomMatrix(30);

        console.log("Matrix V:");
        printMatrix(V);

        let { count, X } = processMatrix(V, A);

        console.log(`\nNumber of elements in V equal to ${A}: ${count}`);
        console.log("Matrix X (elements of V different from A):");
        console.log(X);
}

matrix31();

module.exports = matrix31;