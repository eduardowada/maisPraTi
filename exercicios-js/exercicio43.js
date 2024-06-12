/*
43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência sobre as do obj1 em caso deconflitos.
*/
function combineObjects() {
    let obj1 = {
        Name: "notebook",
        color: "black"
    };

    console.log("obj 1 = ", obj1)

    let obj2 = {
        function: "write",
        row: "horizontal"
    };

    console.log("\nobj 2 = ", obj2)

    let newObj = {};

    for (let chave in obj1) {
        newObj[chave] = obj1[chave];
    }

    for (let chave in obj2) {
        newObj[chave] = obj2[chave]
    }

    console.log("\nNew object = ", newObj)
}

combineObjects();