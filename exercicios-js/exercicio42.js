/*
42. Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays.
*/
function filtrarArrays() {
    let resultado = {};

    let dados = {
        nome: "João",
        idade: 30,
        endereco: {
            rua: "Rua ABC",
            cidade: "Cidade XYZ"
        },
        numeros: [1, 2, 3],
        cores: ["azul", "vermelho", "verde"],
        interesses: ["futebol", "cinema", "música"]
    };
    

    for (let chave in dados) {
        if (Array.isArray(dados[chave])) {
            resultado[chave] = dados[chave];
        }
    }

    return console.log(resultado);
}

filtrarArrays();

module.exports = filtrarArrays;