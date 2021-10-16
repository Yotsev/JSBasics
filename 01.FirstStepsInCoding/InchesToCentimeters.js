function convertor(inputData){
    let number = Number(inputData[0]);
    let inches = 2.54;
    let result = number*inches;
    
    console.log(result);
}
convertor(["5"])