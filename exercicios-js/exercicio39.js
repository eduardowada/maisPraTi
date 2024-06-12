/*
39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/
function compactArray() {
    let A = [];
    let B = [];

    for (let i = 0; i < 100; i++) {
        let number = Math.floor(Math.random() * 201) - 100;;
        A.push(number);
    }

    console.log("Original A:", A)

    for (let i = 0; i < 100; i++) {
        if (A[i] > 0) {
            B.push(A[i]);
        }
    }

    console.log("Compact B:", B)
}

compactArray();