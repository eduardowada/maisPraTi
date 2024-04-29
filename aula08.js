//Exercitando Arrays e funções

//Exercicio 1: Somar todos os elementos de um array

// let elementos = [1, 2, 3, 4];

// function somaElementos(vetor) {
//     let soma = 0;
//     for (let i = 0; i < vetor.length; i++) {
//         soma += vetor[i]
//     }
//     return soma
// }

// console.log("A soma dos elementos é: ", somaElementos(elementos));

//Exercicio 2: Encontrar o maior número em um Array;

// let elementos = [1, 2, 3 , 4, 10, 88, 9, 108, 72]

// function maiorNumero(vetor) {
//     let maior = vetor[0]
//     for (let i = 1; i < vetor.length; i++)
//     if(vetor[i] > maior) {
//         maior = vetor[i]
//     }
//     return maior
// }

// console.log("Dentre os elementos o maior é: ", maiorNumero(elementos));

//Exercício 3: Reveter um array

// let elementos = [1, 2, 3, 4, 5];

// function reverterArray(vetor) {
//     let vetorResultado = []
//     for (let i = vetor.length - 1; i >= 0; i--) {
//     vetorResultado.push(vetor[i])
//     }
// return vetorResultado
// }

// console.log("O vetor invertido é: ", reverterArray(elementos))

//Exercício 4: Somar todos os elementos de uma matriz

// function somaMatriz(matriz) {
//     let soma = 0
//     for(let i = 0; i < matriz.length; i++) {
//         for (let j = 0; j < matriz[i].length; j++) {
//             soma += matriz[i][j]
//         }
//     }
//     return soma
// }

// console.log("A soma dos elementos contidos na nossa matrizz é: ", somaMatriz([[1, 2], [3, 4]]))

//Exercicio 2: Encontrar o maior número em uma matriz
// function maiorNumeroMatrtiz(matriz) {
//     let maior = matriz [0][0]
//     for (let i = 0; i < matriz.length; i++) {
//         for (let j = 0; j < matriz[i].length; j++) {
//             if (matriz[i][j] > maior) {
//                 maior = matriz[i][j];
//             }
//         }
//     }
//     return maior
// }

// console.log("O maior número da minha matriz é: ", maiorNumeroMatrtiz([[1, 2], [3, 4]]))
//-----------------------------------------------------------------------------------------------------------------
//Funções avançadas: String

/* String é considerado um valor primitivo, porém, ao ser interpretado o JS os converte em objetos, possuindo propriedades e métodos.
*/

// console.log("Eduardo Wada".length)
// console.log("Eduardo Wada".charAt(8))

// let nome = "Gabriela"
// console.log(nome.indexOf("a"))

// let nome = "Dick Vigarista"
// console.log(nome)
// console.log(nome.replace("Dick Vigarista", "Pica pau"))
// console.log(nome.substr('7', '5')) // A partir da 7 letra, pega as próximas 5
// console.log(nome.toLocaleUpperCase())
// console.log(nome.toLocaleLowerCase())

// let nome = ' BATMAN '
// console.log('-' + nome.trim() + '-')

//Funções avançadas: Matemáticas

// let x = Math.ceil(10.100) // Arredonda para cima
// console.log(x)

// let x = Math.floor(10.100) //Arredonda para baixo
// console.log(x)

// let x = Math.round(10.600) //arredonda para baixo se for menor que 0,5 e para cima se for maior
// console.log(x)

// let x = Math.random(); //Gera um número aleatório entre 0 e 1
// console.log(x)

//Funções avançadas: Datas
let data = new Date()
// console.log(data.getData()) //Retorna a data de hoje
// console.log(data.getMonth() + 1) //Ele sempre começa do 0, então adicionar o +1
// console.log(data.getFullYear()); // Retorna o ano de hoje
// console.log(data.getDate(), "/", (data.getMonth()) + 1, "/", data.getFullYear()) // Mostra a data completa

// console.log(data.toString()) //Retorna o dia, mês, ano, horário padrão de brasília
// data.setDate(data.getDate() + 720) //Pode ser usado .setFullYear ou .setMonth tbm
// console.log(data.toString())

console.log(data.getTime()) //Retorna o valor de milisegundo de até 1970 até a data