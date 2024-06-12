/*
Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
 mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
 perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
 funcionário.
*/
const prompt = require('prompt-sync')();

function totalPorGenero (salario, genero) {
    let salarioMasculino = 0;
    let salarioFeminino = 0;
    let continuar;

    do {
        salario = parseFloat(prompt("Digite o salário do(a) funcionário(a): "));
        genero = ("Digite o genêro do(a) funcionário(a) (M para masculino, F para feminino): ").toUpperCase();

        while (isNaN(salario) || salario <= 0) {
            salario = parseFloat(prompt("Digite um salário válido: "));
        }
        
        while (genero !== "M" && genero !== "F") {
            genero = prompt("Digite o genêro do(a) funcionário(a) (M para masculino, F para feminino): ").toUpperCase();
        }

        if (genero === "M") {
            salarioMasculino += salario;
        } else {
            salarioFeminino += salario;
        }

        continuar = prompt("Você quer inserir mais funcionários? (Digite S para continuar ou qualquer outra coisa para encerrar): ").toUpperCase()
    } while (continuar === "S");

    return `O salário total pago ao gênero Masculino é de R$${salarioMasculino.toFixed(2)} e o total pago ao gênero feminino é de R$${salarioFeminino.toFixed(2)}`
}

console.log(totalPorGenero());

module.exports = totalPorGenero;