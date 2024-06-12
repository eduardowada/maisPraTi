/*
35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada vetor pode ser preenchido quantas vezes forem necessárias.
*/
function oddOrEven() {
    let values = [];
    let even = [];
    let odd = [];
    let vectorSize = 5

    for(let i = 0; i < 30; i++) {
        values.push(Math.floor(Math.random() * 101));
    }

    console.log("All values: ")
    console.log(values.join(', '))

    for (let value of values) {
        if (value % 2 === 0) {
            even.push(value);
            if (even.length === vectorSize) {
                console.log("Vector of even numbers filled: ", even);
                even = [];
            }
        } else {
            odd.push(value);
            if (odd.length === vectorSize) {
                console.log("Vector of odd numbers filled: ", odd);
                odd = [];
            }
        }
    }

    if (even.length > 0) {
        console.log("Vector of even numbers remaining: ", even)
    }
    if (odd.length > 0) {
        console.log("Vector of odd numbers remaining: ", odd)
    }
}

oddOrEven();

module.exports = oddOrEven;