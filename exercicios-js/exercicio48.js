/*
48. Você recebe dois objetos que representam o inventário de duas lojas diferentes: inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse item em estoque. Escreva uma função que combine os inventários em um único objeto. Se um item aparecer em ambas as lojas, some as quantidades.
*/
function joinInventory() {
    let inventoryA = {
        keyboard: 10,
        headphone: 8,
        mouse: 4
    }

    let inventoryB = {
        headphone: 4,
        mouse: 3,
        mousepad: 7
    }

    let combinedInventory = {};

    for (let item in inventoryA) {
        if (inventoryA.hasOwnProperty(item)) {
            combinedInventory[item] = inventoryA[item];
        }
    }

    for (let item in inventoryB) {
        if (inventoryB.hasOwnProperty(item)) {
           if (combinedInventory.hasOwnProperty(item)) {
            combinedInventory[item] += inventoryB[item];
           } else {
            combinedInventory[item] = inventoryB[item];
           }
        } 
    }

    console.log(combinedInventory);
}

joinInventory();