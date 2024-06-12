/*
5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/
const prompt = require('prompt-sync')();

function jokenpo(escolha) {
    escolha = ''
    let escolhas = ['Pedra', 'Papel', 'Tesoura'];
    while (!escolhas.includes(escolha)) {
        escolha = prompt("Escolha Pedra, Papel ou Tesoura: ");
        escolha = escolha.charAt(0).toUpperCase() + escolha.slice(1).toLowerCase(); //Transformando a Primeira letra em maiúscula e o resto em minúscula
    }
    let escolhaAdversario = escolhas[Math.floor(Math.random() * escolhas.length)];
    let result;

    if (escolha === escolhaAdversario) {
        result = 'Empate!';
    } else if ((escolha === 'Pedra' && escolhaAdversario === 'Tesoura' ) || (escolha === 'Tesoura' && escolhaAdversario === 'Papel') || (escolha === 'Papel' && escolhaAdversario === 'Pedra')) {
        result = 'Parabéns, você venceu... dessa vez!'
    } else {
        result = 'Hahaha, você perdeu dessa vez!'
    }
    return `Você escolheu ${escolha} e a CPU escolheu ${escolhaAdversario}! ${result}`
}

console.log(jokenpo());

module.exports = jokenpo;
