function hasBudget(inputData) {
    let budget = Number(inputData[0]);
    let numberOfVideoCards = Number(inputData[1]);
    let numberOfProcesors = Number(inputData[2]);
    let numberOfRam = Number(inputData[3]);

    let videoCardPrice = 250;
    let prosecorPrice = (numberOfVideoCards * videoCardPrice) * 0.35;
    let ramPrice = (numberOfVideoCards * videoCardPrice) * 0.10;

    let totalPrice = numberOfVideoCards * videoCardPrice + numberOfProcesors * prosecorPrice + numberOfRam * ramPrice;

    if (numberOfVideoCards> numberOfProcesors) {
        totalPrice-=totalPrice*0.15;
    }

    if (budget>= totalPrice) {
        console.log(`You have ${(budget-totalPrice).toFixed(2)} leva left!`);
    }else{
        console.log(`Not enough money! You need ${(totalPrice-budget).toFixed(2)} leva more!`);
    }
}

hasBudget(["900", "2", "1", "3"])
hasBudget(["920.45", "3", "1", "1"])