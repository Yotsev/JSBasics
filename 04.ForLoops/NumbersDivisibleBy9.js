function solve(inputData) {

    let firstNumber = Number(inputData[0]);
    let secondNumber = Number(inputData[1]);
    let sum = 0;

    for (let index = firstNumber; index <= secondNumber; index++) {
        if (index % 9 === 0) {
            sum += index;
        }
    }
    console.log(`The sum: ${sum}`);
    for (let index = firstNumber; index <= secondNumber; index++) {
        if (index % 9 === 0) {
            console.log(index);
        }
    }
}

solve(["100", "200"])