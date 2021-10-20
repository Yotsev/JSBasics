function numberOfCoins(inputData) {
    let change = Number(inputData[0])*100;

    let coins = [200, 100, 50, 20, 10, 5, 2, 1];

    let neededCoins = 0;
    let index = 0;

    while (index<coins.length) {

        let currentCoin = Number(coins[index]);

        if (change / currentCoin < 1) {
            index++;
            continue;
        }

       let curentNumberOfCoins = Math.trunc(change/currentCoin);
       neededCoins += curentNumberOfCoins;

        change -=  currentCoin * curentNumberOfCoins;

        if (change == 0) {
            break;
        }
    }

    console.log(neededCoins);
}

numberOfCoins(["0.56"])