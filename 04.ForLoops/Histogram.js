function solve(inputData) {
    let numbers = Number(inputData[0]);

    let lessThan200 = 0;
    let between200And399 = 0;
    let between400And599 = 0;
    let between600And799 = 0;
    let greaterThan800 = 0;

    for (let index = 1; index <= numbers; index++) {
        let currentNumber = Number(inputData[index]);

        if (currentNumber<200) {
            lessThan200++;
        }else if (currentNumber>=200 && currentNumber<=399) {
            between200And399++
        }else if (currentNumber>=400 && currentNumber<=599) {
            between400And599++
        }else if (currentNumber>=600 && currentNumber<=799) {
            between600And799++
        }else if (currentNumber>=800) {
            greaterThan800++
        }
    }
    console.log(`${(lessThan200/numbers*100).toFixed(2)}%`);
    console.log(`${(between200And399/numbers*100).toFixed(2)}%`);
    console.log(`${(between400And599/numbers*100).toFixed(2)}%`);
    console.log(`${(between600And799/numbers*100).toFixed(2)}%`);
    console.log(`${(greaterThan800/numbers*100).toFixed(2)}%`);
}

solve(["3","1","2","999"])