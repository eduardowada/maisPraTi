/*
45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array.
*/
function countOccurrences() {
    let fruits = ["apple", "orange", "orange", "avocado", "melon","apple", "orange", "orange", "banana", "apple", "orange", "orange", "banana", "melon"]

    let count = {};

    for (let i = 0; i < fruits.length; i++) {
        let string = fruits[i];
        if (count[string]) {
            count[string]++;
        } else {
            count[string] = 1
        }
    }

    console.log(count);
}

countOccurrences();