// // //Array ou vetor

// //--------------------------------------------------------------------
// //FORMAS DE DECLARAR UM ARRAY
// // let listaCompras = Array();

// // listaCompras[0] = "shampoo";
// // listaCompras[1] = "condicionador";
// // listaCompras['x'] = "100";

// // console.log(listaCompras);

// // let listaFrutas = ['Banana', 'Morango', 'Texto']

// // console.log(listaFrutas);

// // let lista_viagem = Array('Passagens', 'Malas');

// // console.log(lista_viagem);
// //-------------------------------------------------------------------

// //Arrays Multidimensionais

// let lista_coisas  = Array();

// lista_coisas['Frutas'] = Array ();

// lista_coisas['Frutas'][0] = "Morango"
// lista_coisas['Frutas'][1] = "Uva"
// lista_coisas['Frutas'][2] = "Laranja"
// lista_coisas['Frutas'][3] = "Bergamota"

// lista_coisas['Viagem'] = Array()
// lista_coisas['Viagem'][0] = "Passagens"
// lista_coisas['Viagem'][1] = "Malas"

// console.log(lista_coisas)

// //Inserção de elementos no final do array
// lista_coisas['Frutas'].push('Banana')
// console.log(lista_coisas)

// //Inserção de elementos no começo do array
// lista_coisas['Frutas'].unshift('Limão')
// console.log(lista_coisas)

// //Exclusão de elementos no final do array
// lista_coisas['Frutas'].pop()
// console.log(lista_coisas)

// //Exclusão de elementos no começo do array
// lista_coisas['Frutas'].shift()
// console.log(lista_coisas)

//PROCURAR NO ARRAY ------------
// let listaProdutos = Array('Computador', 'Caneta', 'Chuteira');

// let aux = listaProdutos.indexOf('Computador')

// if(aux === -1 ){
//     console.log('Elemento não existe no Array')
// } else {
//     console.log('Elemento existe e está na posição ' + aux)
// }
//Arrumando um array em ordem----------------------------------------- 
// let listaProdutos = Array('Lousa', 'Caneta', 'Chuteira','Garrafa de água');

// console.log(listaProdutos.sort())
//----------------------------

//FUNÇÕES-------------------------------------------
// function calcularAreaTerreno(largura, comprimento) {
//     let area = largura * comprimento;
//     return area;
// }

// let prompt = require('prompt-sync')();

// let lg = prompt("Digite a largura do terreno em metros: ");
// let cp = prompt("Digite o comprimento do terreno em metros: ");

// //Chamada da função e passagem de parâmetros.
// let resultado = calcularAreaTerreno (lg, cp)

// console.log('O terreno possui ' + resultado + ' metros quadrados')
// -----------------------------------------------------------------------

// function exibirFuncao(callbackSucesso, callbackErro) {
//     if(true) {
//         callbackSucesso('Funções de callback em caso de sucesso')
//     } else {
//         callbackErro('Função de callback em caso de erro')
//     }
// }

// let callbackSucesso = function(titulo) {
//     console.log(titulo)
// }

// let callbackErro = function(erro){
//     console.log(erro)
// }

// exibirFuncao(callbackSucesso, callbackErro)




