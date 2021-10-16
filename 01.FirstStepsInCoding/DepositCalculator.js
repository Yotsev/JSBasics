function calc(inputData) {

    let depositedSum = Number(inputData[0]);
    let term = Number(inputData[1]) / 100;
    let interestPercent = Number(inputData[2]);

    let deposit = depositedSum + term * ((depositedSum * interestPercent) / 12);

    console.log(deposit);
}
calc(["200", "3", "5.7"])