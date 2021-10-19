function max(inputData){

    let index = 0;
    let maxNumber = Number.MIN_SAFE_INTEGER;
    
    while (inputData[index] !== 'Stop') {
        let currentNumber = Number(inputData[index])
        
        if (currentNumber>maxNumber) {
            maxNumber = currentNumber
        }
        index++;
    }
    console.log(maxNumber);
}
max(["100",
"99",
"80",
"70",
"Stop"])