/*
41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade.
*/
function readPerson() {
    let person = {
        name: "Eduardo",
        age: 25
    };

    console.log("Age:", person.age);

    person.email = "eduardo@test123.com";

    console.log("New object person:", person)
}

readPerson();

module.exports = readPerson;