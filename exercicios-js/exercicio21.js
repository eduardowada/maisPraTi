/*
21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. Para homens calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt- 58 e, para mulheres, peso ideal = 62.1 x alt- 44.7
*/
const prompt = require('prompt-sync')();

function getIdealWeight(height, sex) {
    let idealWeight = 0;
    height = parseFloat(prompt("Type your height (meters): "));
    while (isNaN(height) || height <= 0) {
        height = parseFloat(prompt("Invalid height. Please, yype your height (meters): "));
    }

    sex = prompt("Type your sex(F = Female or M = Male): ").toUpperCase();
    while (sex !== 'M' && sex !== 'F') {
        sex = prompt("Invalid sex. Please, enter a valid sex (M or F): ").toUpperCase();
    }

    if (sex === 'M') {
        idealWeight = 72.7 * height - 58;
    } else {
        idealWeight = 62.1 * height - 44.7;
    }

    return `Your ideal weight is ${idealWeight.toFixed(2)}`
}

console.log(getIdealWeight());

module.exports = getIdealWeight;