/*
47. Crie uma função que transforme um objeto de entrada aplicando uma função fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os resultados.
*/
function transformObject() {
    let object = {
        a: 2,
        b: 4,
        c: 6,
        d: 8
    };

    function double(value) {
        return value * 2;
    }

    let newObject= {};

    for (let chave in object) {
        newObject[chave] = double(object[chave]);
    }

    console.log(newObject)
}

transformObject();