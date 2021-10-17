function calculateBonus(inputData) {
    let number = Number(inputData[0]);

    let bonus = 0;

    if (number <= 100) {
        bonus = 5;
    } else if (number < 1000) {
        bonus = number * 0.20;
    } else {
        bonus = number * 0.10;
    }

    if (number % 2 === 0) {
        bonus += 1;
    } else if (number % 10 === 5) {
        bonus += 2;
    }

    let totalScore = number + bonus;

    console.log(bonus);
    console.log(totalScore);
}
calculateBonus(["20"])
calculateBonus(["175"])
calculateBonus(["2703"])
calculateBonus(["15875"])