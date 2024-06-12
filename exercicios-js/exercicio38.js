/*
38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra variável identificadora que calcule a operação conforme a informação contida nesta variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.
*/
const prompt = require("prompt-sync")();

function vectorOperations(array, operation) {
    array = [];
    let number = 0;
    for (let i = 1; i <= 6; i++) {
        number = parseFloat(prompt(`Type the number ${i} of array: `));

        while (isNaN(number)) {
            number = parseFloat(prompt(`Type the number ${i} of array: `));
        }

        array.push(number)
    }

    operation = parseInt(prompt("\nChoose one option to continue:\n1 - Sum\n2 - Product\n3 - Average value\n4 - Sort in ascending order\n5 - Show the vector.\n"))

    switch (operation) {
        case 1:
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                sum += array[i];
            }
            console.log("\nThe sum is:", sum);
            break;
        case 2:
            let product = 1;
            for(let i = 0; i < array.length; i++) {
                product *= array[i];
            }
            console.log("\nThe product is: ", product);
            break;
        case 3:
            let averageSum = 0;
            let average = 0;
            for (let i = 0; i < array.length; i++) {
                averageSum += array[i];
                average = averageSum / array.length
            }
            console.log("\nThe average is: ", average);
            break;
        case 4:
            for (let i = 0; i < array.length - 1; i++) {
                for (let j = 0; j < array.length - 1; j++) {
                    if (array[j] > array [j + 1]) {
                        let temp = array[j];
                        array[j] = array [j + 1];
                        array [j + 1] = temp;
                }
            }
        }
            console.log("\nSorted array: ", array);
            break;
        case 5:
            console.log("Vector:", array);
            break;
        default:
            console.log("\nInvalid operation.")
    }
}

vectorOperations()