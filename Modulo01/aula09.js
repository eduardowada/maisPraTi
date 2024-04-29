// const pessoa = {
//     nome: "Eduardo",
//     idade: 25,
//     profissao: "Desenvolvedor de software",
//     email: "eduardo_wada@hotmail.com",
//     empregada: true
// }

// pessoa.nome = "Teste person" //Pode mudar o valor declarado antes
// console.log(pessoa) // Mostra todos os dados da pessoa
// console.log(pessoa.nome) //Da pra personalizar o que quer ser mostrado

// delete pessoa.empregada //Deleta um atributo do objeto

// console.log(pessoa)

// pessoa.falar = function() {
//     return `Meu nome é ${this.nome}, tenho ${this.idade} de idade e sou ${this.profissao}`
// }

// console.log(pessoa)

//--------------------------------------------------------------------------
//FOR IN
// const pessoa = {
//     nome: "Eduardo",
//     idade: 25,
//     profissao: "Desenvolvedor de software",
//     email: "eduardo_wada@hotmail.com",
//     empregada: true
// }

// for (let chave in pessoa) {
//     console.log(chave + ": " + pessoa[chave])
// }

//-----------------------------------------------------------------------
//FOR OFF, É MELHOR UTILIZADO EM ARRAYS

// let numeros = [10, 20, 100]

// for (let numero of numeros) {
// console.log(numero)
// }

//Exemplo 2
// let nomes = "Eduardo Wada"

// for (let nome of nomes) {
//     console.log(nome)
// }

//Exemplo 3
// let numeros = [10, 20, 100]

// for (let numero in numeros) {
//     console.log(numero + ': ' + numeros[numero])
// }

/*
Exercício: Você tem uma lista de objetos que representam diferentes tipos de veículos e suas características. Seu objetivo é primeiro usar o FOR IN para listar todas as propriedades e valores de cada veículo. Depois, utilizar o FOR OF para listar apenas os modelos dos veículos
*/

// const carros = [
//     {
//         modelo: 'Gol',
//         cor: 'Vermelho',
//         ano: 2020
//     },
//     {
//         modelo: 'Palio',
//         cor: 'Branco',
//         ano: 2022
//     },
//     {
//         modelo: 'Fiat',
//         cor: 'Azul',
//         ano: 2021
//     }
// ];

// for (let chave in carros) {
//     console.log(carros[chave])
// }

// for (const chave of carros) {
//     console.log(chave['modelo']);
// }

//-----------------------------------------------------------------------------
//ForEach é um metodo do objeto array

// let cores = ['Azul', 'Preto', 'Branco']

// cores.forEach(function (cor, indice) {
//     console.log (indice + ": " + cor) 
// })

//Mesmo exemplo mas com arrow function
// let cores = ['Azul', 'Preto', 'Branco']

// cores.forEach((cor, indice) => {console.log (indice + ": " + cor) 
// })

//Exemplo com um array multidimensional
// let compras = []
// compras['frutas'] = new Array('Banana', 'laranja')

// compras['frutas'].forEach((value, index) => {
//     console.log(index + ": " + value)
// });

/*
    Construa um array de números e calcule a soma total dos números e também imprima cada número multiplicado por dois.
*/

// let numeros = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10]
// let soma = 0
// numeros.forEach((valor, index) => {
//     console.log(index + ": O valor multiplicado por 2 é = " + valor*2)
//     soma += valor
// })

// console.log("O valor da soma é = " + soma)
//--------------------------------------------------------------------------------------------------------------------
//FÁBRICA DE OBJETOS A PARTIR DE UMA FUNÇÃO (DESIGN PATTERN)

let BicicletaFactory = function(cor, tipo, marca) {
    return {
        cor,
        tipo,
        marca
    }
}

let bicicleta1 = BicicletaFactory('Azul', 'Speed', 'Caloi')
let bicicleta2 = BicicletaFactory('Preta', 'Mountain', 'BMX')

console.log(bicicleta1)
console.log(bicicleta2)