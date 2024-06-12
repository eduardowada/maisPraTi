/*
4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.
*/
const prompt = require('prompt-sync')();

function verificarTriangulo(segmento1, segmento2, segmento3) {
    segmento1 = parseFloat(prompt("Insira o valor do primeiro segmento de reta: "))
if (segmento1 < 0 || isNaN(segmento1)) {
    while (segmento1 < 0 || isNaN(segmento1)) {
        console.log("Insira um valor válido.")
        segmento1 = parseFloat(prompt("Insira o valor do primeiro segmento de reta: "))
    }
}

segmento2 = parseFloat(prompt("Insira o valor do segundo segmento de reta: "))
if (segmento2 < 0 || isNaN(segmento2)) {
    while (segmento2 < 0 || isNaN(segmento2)) {
        console.log("Insira um valor válido.")
        segmento2 = parseFloat(prompt("Insira o valor do segundo segmento de reta: "))
    }
}

segmento3 = parseFloat(prompt("Insira o valor do terceiro segmento de reta: "))
if (segmento3 < 0 || isNaN(segmento3)) {
    while (segmento3 < 0 || isNaN(segmento3)) {
        console.log("Insira um valor válido.")
        segmento3 = parseFloat(prompt("Insira o valor do terceiro segmento de reta: "))
    }
}

if (segmento1 + segmento2 > segmento3 && segmento1 + segmento3 > segmento2 && segmento2 + segmento3 > segmento1) {
    resultado = "É possível formar um triângulo";
} else {
    resultado = "Não é possível formar um triângulo";
}
return resultado
}

console.log(verificarTriangulo())

module.exports = verificarTriangulo;





