/*
40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros cada), representando as apostas feitas. Compare os números das apostas com o resultado oficial e mostre uma mensagem ("Ganhador") se todos os números corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos e quadras, apenas por quinas.)
*/
function lotoResult() {
    // Função para gerar um número aleatório entre 1 e 60
    function generateRandomNumber() {
        return Math.floor(Math.random() * 60) + 1;
    }

    // Função para gerar um vetor de 5 números aleatórios únicos entre 1 e 60
    function generateRandomVector() {
        let vector = new Set();
        while (vector.size < 5) {
            vector.add(generateRandomNumber());
        }
        return Array.from(vector);
    }

    // Gerar o vetor do resultado oficial da Loto
    let officialResult = generateRandomVector();
    console.log("Resultado oficial da Loto:", officialResult);

    // Gerar 50 conjuntos de apostas
    let bets = [];
    for (let i = 0; i < 50; i++) {
        bets.push(generateRandomVector());
    }

    // Verificar cada aposta
    for (let i = 0; i < bets.length; i++) {
        let bet = bets[i];
        console.log(`Aposta ${i + 1}:`, bet);
        
        // Verificar se a aposta é um ganhador
        let isWinner = bet.every(num => officialResult.includes(num));
        if (isWinner) {
            console.log("Ganhador!");
        }
    }
}

lotoResult();
