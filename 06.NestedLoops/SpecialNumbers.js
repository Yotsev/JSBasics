function special(inputData) {
    let number = Number(inputData[0]);
    let result = '';

    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            for (let c = 1; c < 10; c++) {
                for (let d = 1; d < 10; d++) {
                    if (number % a === 0 && number % b === 0 && number % c === 0 && number % d === 0) {
                        result += `${a}${b}${c}${d} `;
                    }
                }
            }
        }
    }

    console.log(result);
}
special(["3"])