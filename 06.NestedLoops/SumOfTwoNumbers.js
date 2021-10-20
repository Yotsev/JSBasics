function sum (inputData){
    let start = Number(inputData[0]);
    let end = Number(inputData[1]);
    let targetSum = Number(inputData[2]);

    let counter = 0;
    let isFound = false;
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            counter++;
            
            if (i+j===targetSum) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${targetSum})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${targetSum}`);
    }
}

sum(["1",
"10",
"5"])
sum(["23",
"24",
"20"])
sum(["88",
"888",
"1000"])
sum(["88",
"888",
"2000"])
