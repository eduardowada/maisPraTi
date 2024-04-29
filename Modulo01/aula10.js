// const professor = {
//     nome: "Tony Stark",
//     materia: "Matemática",
//     notas: {
//         aluno1: 3.5,
//         aluno2: 4.0,
//         aluno3: 2.8
//     }
// }

/*
For in para iterar sobre as propriedades dentro das notas, calcule a média e imprima se o aluno está ou não aprovado. Caso a média esteja acima de 3.0, indique que a turma está acima da méia de aprovação.
*/

// let somaNotas = 0
// let numeroDeAlunos = 0

// for (let aluno in professor.notas) {
//     somaNotas += professor.notas[aluno]
//     numeroDeAlunos++
// }

// let media = somaNotas / numeroDeAlunos

// console.log(`A média das notas da turma é de ${media.toFixed(2)}.`)
// console.log(media >= 3 ? `A turma do ${professor.nome} está acima da média de aprovação` : 'A turma está abaixo da média')

//----------------------------

// const biblioteca = [
//     { titulo: '12 Regras para Vida', autor: 'Jordan Peterson', ano: 1925 },
//     { titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', ano: 1937 },
//     { titulo: 'Senhora do Jogo', autor: 'Sidney Sheldon', ano: 2009 },
//     { titulo: 'Zé Carioca', autor: 'Disney', ano: 1940 },
//     { titulo: 'Nação Dopamina', autor: 'Anna Lembke', ano: 2021 }
// ]

/*
    * For of para iterar sobre o array biblioteca
    * Para cada livro, verifique se foi publicado antes de 2000
    * Imprimir o título e o ano dos livros que atendem essa condição
*/

// for (let livro of biblioteca) {
//     if (livro.ano < 2000) {
//         console.log(`O livro "${livro.titulo}", escrito por ${livro.autor}, foi publicado em ${livro.ano}`)
//     }
// }

//----------------------------------
// const filmes = [
//     {titulo: "Tropa de Elite", genero: "Ação"},
//     {titulo: "Capitão Fantástico", genero: "Drama"},
//     {titulo: "O Poderoso Chefão", genero: "Crime"},
//     {titulo: "Clube da Luta", genero: "Drama"},
//     {titulo: "Oppenheimer", genero: "Biografia"},
//     {titulo: "High School Musical", genero: "Musical"},
//     {titulo: "Barbie", genero: "Live action"},
// ]

/*
    *Com forEach para iterar sobre o array, crie um objeto para armazenar a contagem de filmes por gênero
    *Para cada filme no array, verifique se o gênero já existe no objeto contagem.
    *Se existir, incremente a contagem, se não, adicione o gênero ao objeto com contagem inicial de 1
    *Após loop, imprima cada gênero e o número de filmes correspondente.
*/

// let contagemGeneros = {}

// filmes.forEach(filme => {
//     if (contagemGeneros[filme.genero]) {
//         contagemGeneros[filme.genero]++
//     } else {
//         contagemGeneros[filme.genero] = 1
//     }
// } )

// for (let genero in contagemGeneros) {
//     console.log(`Existem ${contagemGeneros[genero]} filmes do gênero ${genero}`)
// }

//------------------------------------------
/*PESQUISA BINÁRIA 
Desenvolva um algoritmo que seja capaz de receber uma lista, e um valor correto. E execute uma pesquisa binária para encontrar o valor certo.
*/ 

//CHAT GPT
// function pesquisaBinaria(lista, valor) {
//     let inicio = 0;
//     let fim = lista.length - 1;
//     let meio;

//     while (inicio <= fim) {
//         meio = Math.floor((inicio + fim) / 2);

//         if (lista[meio] === valor) {
//             return meio;
//         } else if (lista[meio] < valor) {
//             inicio = meio + 1;
//         } else {
//             fim = meio - 1;
//         }
//     }

//     return -1;
// }

// // Exemplo de uso
// const lista = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// const valor = 13;

// const indice = pesquisaBinaria(lista, valor);

// if (indice !== -1) {
//     console.log(`O valor ${valor} está na posição ${indice} da lista.`);
// } else {
//     console.log(`O valor ${valor} não foi encontrado na lista.`);
// }

//RESOLUÇÃO DO PROFESSOR

// const binarySearch = (list, item) => {
//     let low = 0
//     let high = list.length - 1

//     while (low <= high) {
//         const mid = Math.floor((low + high) /2)
//         const guess = list[mid]

//         if (guess === item) {
//             return mid
//         } else if (guess > item) {
//             high = mid - 1 
//         } else {
//             low = mid + 1 
//         }
//     }
//     return null
// }

// const myList = [1, 3, 5, 7, 9]

// console.log(binarySearch(myList, 3)) //1
// console.log(binarySearch(myList, -1)) // null

//----------------------------------------

/*
    spread = espalhar
    rest = juntar
*/

//Exemplo 1
// let listaTimes = ['Grêmio', 'Football Porto Alegrense']
// let listaTimes2 = ['São José', 'Pelotas']

// let listaTimesCompletos = ['Flamengo', 'São Paulo', ...listaTimes, ...listaTimes2]

// console.log(listaTimesCompletos)

//Exemplo 2 - Antes de uma variável, fica espaçado
let nome = "Eduardo Wada"
console.log(...nome)

//Exemplo 3 - Em um array, cada caracter pega um indice
let nome2 = "Eduardo Wada"
console.log([...nome])

/*
    Isso é apenas um teste, repito, APENAS UM TESTE
*/
