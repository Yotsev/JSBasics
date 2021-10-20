function solve(inputData) {

    let priceOfTrip = Number(inputData[0]);
    let money = Number(inputData[1]);

    let index = 2;
    let days = 0;
    let consecutiveDays = 5;

    while (money < priceOfTrip) {

        let action = inputData[index];
        let currentMoney = Number(inputData[index + 1]);

        if (action === 'save') {
            money += currentMoney;
            consecutiveDays = 5;

        } else {
            money -= currentMoney;
            if (money < 0) {
                money = 0;
            }
            consecutiveDays--;
        }

        days++;

        if (consecutiveDays === 0) {
            break;
        }

        index+=2;
    }
    if (consecutiveDays === 0) {
        console.log('You can\'t save the money.');
        console.log(days);
    }else{
        console.log(`You saved the money for ${days} days.`);
    }
}
solve(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])