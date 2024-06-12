/*
6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
 tentar descobrir qual foi o valor sorteado.
*/
const prompt = require('prompt-sync')();

function adivinharNumero (palpite) {
    let numeroSorteado = Math.floor(Math.random() * 5) + 1;
    let mensagem;

    do {
        palpite = parseInt(prompt("Tente adivinhar o número sorteado entre 1 e 5: "));
        if (!isNaN(palpite) && palpite >= 1 && palpite <= 5) {
            break;
        }
        console.log("Por favor, insira um número válido entre 1 e 5.");
        palpite = parseInt(prompt("Tente adivinhar o número sorteado entre 1 e 5: "));
    } while (true);

    if (palpite === numeroSorteado) {
        mensagem = "Parabéns, você acertou!!";
    } else {
        mensagem = "Errouuu, o número sorteado é " + numeroSorteado + " Tente novamente!!";
    }
    
    return mensagem;
}

console.log(adivinharNumero());

module.exports = adivinharNumero;
