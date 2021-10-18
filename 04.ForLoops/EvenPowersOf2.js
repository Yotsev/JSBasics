function power(inputData) {
    let endOfSequence = Number(inputData[0]);

    for (let index = 0; index <= endOfSequence; index+=2) {
        
        if (index === 0) {
            console.log(1);
            continue;
        }
        console.log(Math.pow(2,index));
    }
}

power(["3"])
power(["4"])
power(["5"])
power(["6"])
power(["7"])
