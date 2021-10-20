function equalSum(inputData) {
    let start = Number(inputData[0]);
    let end = Number(inputData[1]);

    let sums = '';
    for (let i = start; i <= end; i++) {

        let oddSum = 0;
        let evenSum = 0;

        let currentNumberToString = i.toString();
        for (let j = 0; j < currentNumberToString.length; j++) {
            if (j % 2 !== 0) {
                oddSum += Number(currentNumberToString[j]);
            } else {
                evenSum += Number(currentNumberToString[j]);
            }
        }

        if (oddSum == evenSum) {
            sums += i + ' ';
        }
    }

    console.log(sums);
}
equalSum((["100000",
    "100050"]))