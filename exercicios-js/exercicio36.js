/*
36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de um teste daloteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a mensagem "Parabéns, tu foi o GANHADOR".
*/
function lotteryResults() {
    let answerKey = [];
    for (let i = 0; i < 13; i++) {
        answerKey.push(Math.floor(Math.random() * 2) + 1);
    }

    for (let i = 1; i < 101; i++) {
        let responses = [];
        for (let j = 0; j < 13; j++) {
            responses.push(Math.floor(Math.random() * 2) + 1);
        }
        let correctAnswers = 0;

        for (let k = 0; k < 13; k++) {
            if (responses[k] === answerKey[k]) {
                correctAnswers++;
            }
        }

        console.log(`Bettor number ${i}, correct answers: ${correctAnswers}`);

        if (correctAnswers === 13) {
            console.log("Congratulations, you are the WINNER!!!")
        }
    }
}

lotteryResults();

module.exports = lotteryResults;