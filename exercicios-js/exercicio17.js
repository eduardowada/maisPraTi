/*
17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
*/
const prompt = require('prompt-sync')();

function NameAndAge (name, age) {
    let names = [];
    let ages = [];

    for (let i = 0; i < 9; i++) {
        name = prompt("Enter a name: ");
        while (name.trim() === "") {
            console.log("Invalid name. Please, enter a valid name.");
            name = prompt("Enter a name: ");
        }
        
        names.push(name);

        age = prompt("Enter a age: ");
        while (isNaN(age) || age < 0) {
            console.log("Invalid age. Please, enter a valid age.");
            age = prompt("Enter a age: ");
        }

        ages.push(age);
    }

    console.log("All names entered", names.join(", "));
    console.log("All ages entered: ", ages.join(", "));

    for (let i = 0; i < 9; i++) {
        if (ages[i] < 18) {
            console.log(names[i], "is", ages[i], "years old, therefore he/she is underage")
        }
    }

}

(NameAndAge());

module.exports = NameAndAge;