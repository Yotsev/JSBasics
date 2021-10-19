function min(inputData){
    
    let index = 0;
    let minNumber = Number.MAX_SAFE_INTEGER;
    
    while (inputData[index] !== 'Stop') {
        let currentNumber = Number(inputData[index])
        
        if (currentNumber<minNumber) {
            minNumber = currentNumber
        }
        index++;
    }
    console.log(minNumber);
}
min(["100",
"99",
"80",
"70",
"Stop"])