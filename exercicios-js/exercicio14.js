/*
Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
 mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
 que eles foram informados.
*/
const prompt = require('prompt-sync')();

function saveNames (name) {
    let names = [];
    
    for (let i = 0; i < 7; i++) {
        name = prompt("Enter a name: ");
        
        while (name.trim() === "") {
            console.log("Invalid name. Please enter a valid name.");
            name = prompt("Enter a name: ");
        }

        names.push(name);
    }

    let reversedNames = [];

    for (let i = names.length - 1; i >= 0; i--) {
        reversedNames.push(names[i]);
    }

    return reversedNames;
}

console.log(saveNames());

module.exports = saveNames;