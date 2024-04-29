const prompt = require('prompt-sync')();
/* Exercício 1: Par ou ímpar


let numero = parseInt(prompt("Insira um número: "));

if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar");
}
*/

//Exercício 2: Maior de dois números

// const prompt = require('prompt-sync')();

// let numero1 = parseInt(prompt("Insira o primeiro número: "));
// let numero2 = parseInt(prompt("Insira o segundo número: "));

// if (numero1 > numero2) {
//     console.log("O primeiro número é maior.");
// } else if (numero2 > numero1) {
//     console.log("O segundo número é maior");
// } else {
//     console.log("Os números são iguais.")
// }

// Exercício 3: Triângulo



// let lado1 = parseInt(prompt("Insira o comprimento do primeiro lado: "));
// let lado2 = parseInt(prompt("Insira o comprimento do segundo lado: "));
// let lado3 = parseInt(prompt("Insira o comprimento do terceiro lado: "));

// if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
//     console.log("è possível formar um triângulo com essas medidas")
// } else {
//     console.log("Não é possível formar um triângulo");
// }

//Exercício 4: Calculadora Simples

// let num1 = parseInt(prompt("Insira o primeiro número: "));
// let num2 = parseInt(prompt("Insira o segundo número: "));
// let operacao = prompt ("Insira a operação desejada (+, -, /, *): ")

// let resultado;

// if (operacao === '+'){
//     resultado = num1 + num2
// } else if (operacao === '-') {
//     resultado = num1 - num2
// } else if (operacao === '*') {
//     resultado = num1 * num2
// } else if (operacao === '/'){
//     if (num2 !== 0) {
//         resultado = num1 / num2;
//     } else {
//         console.log("Erro: divisão por zero");
//         resultado = undefined;
//     }
// }
//     else {
//         console.log("Operação inválida");
//     }

//     if (resultado !== undefined) {
//         console.log("Resultado: ", resultado);
//     }

// Exemplo SWITCH CASE

// let dia = parseInt(prompt("Insira um número do dia da semana: "));

// let nomeDia;

// switch(dia) {
//     case 1:
//         nomeDia = "Domingo";
//         break;
//     case 2:
//         nomeDia = "Segunda-feira";
//         break;
//     case 3:
//         nomeDia = "Terça-feira";
//         break;
//     case 4:
//         nomeDia = "Quarta-feira";
//         break;
//     case 5:
//         nomeDia = "Quinta-feira";
//         break;
//     case 6:
//         nomeDia = "Sexta-feira";
//         break;
//     case 7:
//         nomeDia = "Sábado";
//         break;
//     default:
//         console.log*"Digite um número de 1 a 7"
//         break;
// }

// console.log("O dia é:", nomeDia);

//Exercício da calculadora com switch case

// let num1 = parseInt(prompt("Insira o número 1: "));
// let num2 = parseInt(prompt("Insira o número 2: "));
// let operacao = prompt ("Insira a operação desejada (+, -, /, *): ");

// let resultado;

// switch(operacao) {
//     case '+':
//         resultado = num1 + num2;
//         break;
//     case '-':
//         resultado = num1 - num2;
//         break;
//     case '*':
//         resultado = num1 * num2;
//         break
//     case "/":
//         if (num2 !== 0) {
//         resultado = num1 / num2
//         } else {
//         console.log("Erro: divisão por zero");
//         resultado = undefined;
//         }
//         break;
//     default:
//         console.log("Operador Inválido!");
// }

// console.log("Resultado: ", resultado)

//Exercício número de dias no mês

// let mes = parseInt(prompt("Insira o número do mês (1 a 12): "));

// let diasNoMes;

// switch(mes) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         diasNoMes = 31;
//         break;
//     case 4: case 6: case 9: case 11:
//         diasNoMes = 30;
//         break; 
//     case 2:
//         diasNoMes = 28;
//         break;
//     default:
//         diasNoMes = -1;
//         break;
// }

// if (diasNoMes !== -1) {
//     console.log("O mês", mes, "tem", diasNoMes, "dias");
// } else {
//     console.log("Mês Inválido.")
// }


//EXEMPLO COM ESTRUTURA DE REPETIÇÃO: For

// let contador = 0;
// let multiplicando = 5;

// // <variável>;      <condição>,      <incremento>
// for (contador = 0; contador <= 10; contador++) {
//     console.log(`${multiplicando} * ${contador} =`, multiplicando * contador);
// }


// EXEMPLO DE CONTADOR DE NÚMEROS PARES
// for (let i = 0; i <= 100; i+=2){
//     console.log(i);
// }

//EXEMPLO DE SOMA DE NÚMEROS ATÉ 10
// let soma = 0;
// for (let i = 0; i <=10; i++){
//     soma += i
// }
// console.log(soma)

//EXEMPLO DE NÚMEROS DECRESCENTES DE 10 A 1
// for (let i = 10; i >= 0; i--) {
// console.log(i);
// }

//EXEMPLO COM WHILE
// let i = 10;

// while (i>=1){
//     console.log(i);
//     i--;
// }

//IMPRIMIR OS MÚLTIPLOS DE 5 MENORES QUE 100
// let i = 0

// while (i <= 100){
//     console.log(i)
//     i += 5
// }

//CALCULAR A SOMA DOS NÚMEROS DE 1 A 1000 COM WHILE
// let soma = 0
// let i = 0
// while (i <= 1000){
// soma += i;
// i++;
// }
// console.log(soma);

//EXEMPLO DE LOOP ATÉ DIGITAR SENHA CORRETA
// let senha

// do{
//     senha = prompt("Digite a senha: ");
// } while (senha !== "1234");

// console.log("Senha correta")


//PEDIR AO USUÁRIO PARA ADIVINHAR UM NÚMERO ENTRE 1 E 10
const numeroCorreto = Math.floor((Math.random() * 10) +1)
console.log(numeroCorreto)
let tentativa

do{
    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 10: "))
    if (tentativa < numeroCorreto) {
        console.log("Tente um número maior")
    } else if (tentativa > numeroCorreto) {
        console.log("Tente um número menor")
    }
} while (tentativa !== numeroCorreto)

console.log("Parabéns! Você acertou")