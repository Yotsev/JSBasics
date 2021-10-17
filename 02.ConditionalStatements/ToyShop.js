function vacationInfo(inputData) {

    let vacationPrice = Number(inputData[0]);
    let numberOfPuzzels = Number(inputData[1]);
    let numberOfDolls = Number(inputData[2]);
    let numberOfTeddyBears = Number(inputData[3]);
    let numberOfMinions = Number(inputData[4]);
    let numberOfTrucks = Number(inputData[5]);

    let totalToys = numberOfPuzzels + numberOfDolls + numberOfTeddyBears + numberOfMinions + numberOfTrucks;
    let totalPrice = numberOfPuzzels * 2.60 + numberOfDolls * 3 + numberOfTeddyBears * 4.10 + numberOfMinions * 8.20 + numberOfTrucks * 2;

    if (totalToys >= 50) {
        totalPrice -= totalPrice * 0.25;
    }

    let rent = totalPrice * 0.10;

    let finalIncom = totalPrice - rent;

    if (finalIncom >= vacationPrice) {
        console.log(`Yes! ${(finalIncom-vacationPrice).toFixed(2)} lv left.`);
    }else{
        console.log(`Not enough money! ${(vacationPrice-finalIncom).toFixed(2)} lv needed.`);
    }
}

vacationInfo(["40.8", "20", "25", "30", "50", "10"])
vacationInfo(["320", "8", "2", "5", "5", "1"])
