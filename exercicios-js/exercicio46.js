/*
46. Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor.
*/
function salesPerSeller() {
    let sales = [
        {seller: "Eduardo", value: 180},
        {seller: "João", value: 100},
        {seller: "Maria", value: 270},
        {seller: "Carlos", value: 290},
        {seller: "Maria", value: 300},
        {seller: "Eduardo", value: 170},
        {seller: "Maria", value: 280},
        {seller: "Maria", value: 500},
        {seller: "João", value: 150},
    ];

    let totalPerSeller = {}

    for (let i = 0; i < sales.length; i++) {
        let sale = sales[i];
        let seller = sale.seller;
        let value = sale.value;

        if (totalPerSeller[seller]) {
            totalPerSeller[seller] += value;
        } else {
            totalPerSeller[seller] = value
        }
    }

    console.log(totalPerSeller)
}

salesPerSeller();