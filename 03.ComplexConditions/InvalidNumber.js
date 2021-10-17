function isValid(inputData) {

    let number = Number(inputData[0]);

    if (number !== 0 && number < 100 || number > 200) {
        console.log('invalid');
    }
}