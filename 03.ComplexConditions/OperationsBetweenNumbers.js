function operation(inputData) {

    let firstNumber = Number(inputData[0]);
    let secondNumber = Number(inputData[1]);
    let sign = inputData[2];

    let result;

    switch (sign) {
        case '+': result = firstNumber + secondNumber; break;
        case '-': result = firstNumber - secondNumber; break;
        case '*': result = firstNumber * secondNumber; break;
        case '/': if (secondNumber !== 0) {
            result = firstNumber / secondNumber; break;
        }
        case '%': if (secondNumber !== 0) {
            result = firstNumber % secondNumber; break;
        }
    }

    let evenOrOdd;

    if (typeof result === 'undefined') {
        console.log(`Cannot divide ${firstNumber} by zero`);
    } else if (sign === '+' || sign === '-' || sign === '*') {
        if (result % 2 === 0) {
            evenOrOdd = 'even';
        } else {
            evenOrOdd = 'odd';
        }
        console.log(`${firstNumber} ${sign} ${secondNumber} = ${result} - ${evenOrOdd}`);
    }else if (sign === '/') {
        console.log(`${firstNumber} / ${secondNumber} = ${result.toFixed(2)}`);
    }else{
        console.log(`${firstNumber} % ${secondNumber} = ${result}`);
    }
}