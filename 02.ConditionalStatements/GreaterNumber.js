function greaterNumber(inputData){
    let firstNumber = Number(inputData[0]);
    let secondNumber = Number(inputData[1]);

    if (firstNumber>secondNumber) {
        console.log(firstNumber);
    }else{
        console.log(secondNumber);
    }
}
greaterNumber(["5", "3"])