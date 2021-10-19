function balanceIncrease(inputData) {

    let index = 0;
    let sum = 0;

    while (inputData[index] !== 'NoMoreMoney') {
        
        let increase= Number(inputData[index])

        if (increase < 0) {
            console.log(`Invalid operation!`);
            break;
        }

        sum+= increase;
        console.log(`Increase: ${increase.toFixed(2)}`);
        index++;
    }

    console.log(`Total: ${sum.toFixed(2)}`);
}

balanceIncrease(["5.51",
"69.42",
"100",
"NoMoreMoney"])