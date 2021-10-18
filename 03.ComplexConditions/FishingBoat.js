function neededMoney(inputData) {

    let budget = Number(inputData[0]);
    let season = inputData[1];
    let numberOfFishermen = Number(inputData[2]);

    let boatPrice;

    switch (season) {
        case 'Spring': boatPrice = 3000; break;
        case 'Summer':
        case 'Autumn':
            boatPrice = 4200;
            break;
        case 'Winter': boatPrice = 2600; break;
    }

    if (numberOfFishermen<=6) {
        boatPrice -= boatPrice*0.10;
    }else if (numberOfFishermen>6 && numberOfFishermen<=11) {
        boatPrice -=boatPrice*0.15;
    }else{
        boatPrice -= boatPrice*0.25;
    }

    if (numberOfFishermen %2 === 0 && season !=='Autumn') {
        boatPrice -= boatPrice*0.05;
    }

    if (boatPrice<=budget) {
        console.log(`Yes! You have ${(budget-boatPrice).toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money! You need ${(boatPrice-budget).toFixed(2)} leva.`);
    }
}

neededMoney(["3000", "Summer", "11"])
neededMoney(["3600", "Autumn", "6"])