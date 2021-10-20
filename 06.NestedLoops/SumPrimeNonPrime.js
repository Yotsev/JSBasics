function equalSums(inputData) {
    let index = 0;
    let command = inputData[index];
    index++;

    let primeSum = 0;
    let nonPrimeSum = 0;

    while (command !== 'stop') {

        let currentNumber = Number(command);

        if (currentNumber < 0) {
            console.log('Number is negative.');
            command = inputData[index];
            index++;
            continue;
        }

        if (currentNumber === 1) {
            primeSum += currentNumber;
            command = inputData[index];
            index++;
            continue;
        }

        let isPrime = true

        for (let i = 2; i < currentNumber; i++) {
            if (currentNumber % i === 0) {
                isPrime = false;
            }
        }

        if (isPrime) {
            primeSum += currentNumber;
        } else {
            nonPrimeSum += currentNumber
        }

        command = inputData[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

equalSums(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])