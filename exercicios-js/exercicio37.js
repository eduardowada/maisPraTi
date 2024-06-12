/*
37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12; e mostre uma mensagem de “REPROVADO”,caso contrário.
*/
function testAnswer() {
    let alternatives = ['A', 'B', 'C', 'D'];
    
    for (let i = 1; i <= 50; i++) {
        let correctAnswers = [];
        let point = 0;

        // Gerar o gabarito para cada aluno
        for (let r = 0; r < 20; r++) {
            let correct = alternatives[Math.floor(Math.random() * alternatives.length)];
            correctAnswers.push(correct);
        }

        let StudentsAnswers = [];

        // Gerar as respostas de cada aluno
        for (let j = 0; j < 20; j++) {
            let answers = alternatives[Math.floor(Math.random() * alternatives.length)];
            StudentsAnswers.push(answers);
        }

        // Comparar as respostas do aluno com o gabarito
        for (let k = 0; k < 20; k++) {
            if (StudentsAnswers[k] === correctAnswers[k]) {
                point++;
            }
        }

        // Mostrar o número de acertos e a mensagem de "APROVADO" ou "REPROVADO" para cada aluno
        console.log(`Student ${i}, correct answers: ${point}`);

        if (point >= 12) {
            console.log("Approved.");
        } else {
            console.log("Reproved.");
        }
    }
}

testAnswer();

module.exports = testAnswer;
