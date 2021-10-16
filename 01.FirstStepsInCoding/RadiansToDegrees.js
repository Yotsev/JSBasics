function degreesConvertor(inputData) {
    let radians = Number(inputData[0]);
    let degrees = radians * 180 / Math.PI;

    console.log(degrees);
}
degreesConvertor(["3.1416"])