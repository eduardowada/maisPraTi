/*
44. Escreva uma função que conte quantas propriedades do tipo string existem em um objeto e retorne esse número.
*/
function countStrings() {
    let obj = {
        name: "Eduardo",
        age: 25,
        city: "São Paulo",
        job: "developer",
        email: "eduardodev@teste.com"
    }

    let countString = 0;
    
    for (chave in obj) {
        if (typeof obj[chave] === "string") {
            countString++;
        }
    }

    console.log("Total of strings in object is: " + countString);
}

countStrings();